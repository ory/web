import cn from 'classnames'
import parse from 'csv-parse'
import dateformat from 'dateformat'
import csvHydraHitsPerMonth from 'raw-loader!../../../stats/hydra/hits-per-month.csv'
import csvKetoHitsPerMonth from 'raw-loader!../../../stats/keto/hits-per-month.csv'
import csvKratosHitsPerMonth from 'raw-loader!../../../stats/kratos/hits-per-month.csv'
import csvOathkeeperHitsPerMonth from 'raw-loader!../../../stats/oathkeeper/hits-per-month.csv'
import React, { Component } from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'

import AnimatedCounter from './animated-counter'

import { pb32, pb64, pt64 } from '../../freestanding/utils/padding.module.css'
import * as styles from './stats.module.css'

const countGitHubStars = (state: StateTypes) =>
  Object.keys(state.github)
    .map((repo) => state.github[repo])
    .reduce((p: number, n: number) => p + n, 0)

const countDockerImagePulls = (state: StateTypes) =>
  Object.keys(state.docker)
    .map((repo) => state.docker[repo])
    .reduce((p: number, n: number) => p + n, 0)

const analyze = (raw: string): Promise<number[][]> =>
  new Promise((resolve, reject) => {
    parse(raw, { cast_date: true }, (err, csv) => {
      if (err) {
        reject(err)
        return
      }

      // Remove header
      let data: any = csv.slice(1)

      // Sort by date
      data.sort(
        (a: number[], b: number[]) =>
          new Date(a[0]).getTime() - new Date(b[0]).getTime()
      )

      // Now that it's sorted, get the first (oldest) date
      // const then = new Date(data[0][0])

      // Remove dupes, transform dates to integer keys
      data = uniq(data).map((v: any) => [
        new Date(v[0]).getTime(),
        parseInt(v[1])
      ])

      resolve(data)
    })
  })

const uniq = (raw: any) => {
  const obj: { [key: string]: number } = {}
  for (let i = 0, len = raw.length; i < len; i++) {
    obj[raw[i][0]] = raw[i]
  }

  const result = []
  for (const key in obj) {
    result.push(obj[key])
  }
  return result
}
//

const stats = (state: StateTypes) => [
  {
    title: 'Requests secured',
    amount: state.requests.amount,
    description: `in ${dateformat(state.requests.date, 'mmmm yyyy')}`
  },
  {
    title: 'Docker pulls',
    amount: countDockerImagePulls(state),
    description: 'Overall'
  },
  {
    title: 'GitHub stars',
    amount: countGitHubStars(state),
    description: 'Overall'
  }
]

interface PropTypes {
  title: React.ReactElement
  description: React.ReactElement
}

type GitHub = {
  [repo: string]: number
}

type Docker = {
  [repo: string]: number
}

interface StateTypes {
  docker: Docker
  github: GitHub
  requests: {
    amount: number
    date: Date
  }
}

class Stats extends Component<PropTypes, StateTypes> {
  state = {
    requests: { amount: 0, date: new Date() },
    docker: {},
    github: {}
  }

  fetchGitHubStars = (page = 0) => {
    const url = `https://corsar.ory.sh/orgs/ory/repos?__host=api.github.com&__proto=https&per_page=100&page=${page}`
    fetch(url)
      .then((body) => body.json())
      .then((repos) => {
        repos.forEach(({ stargazers_count, name }: any) => {
          this.setState((state) => {
            return {
              github: {
                ...state.github,
                [name]: stargazers_count
              }
            }
          })
        })

        if (repos.length >= 100) {
          this.fetchGitHubStars(page + 1)
        }
      })
      .catch((err) =>
        console.error(
          `An error occurred while trying to fetch "${url}": ${err}`
        )
      )
  }

  fetchDockerImagePulls = (org: string, url?: string) => {
    const endpoint =
      url ||
      `https://corsar.ory.sh/v2/repositories/${org}/?__host=hub.docker.com&__proto=https&page_size=100`
    fetch(endpoint)
      .then((body) => body.json())
      .then(
        ({
          results,
          previous
        }: {
          previous?: string
          results: [
            {
              name: string
              namespace: string
              pull_count: number
            }
          ]
        }) => {
          results.forEach(({ name, namespace, pull_count }) => {
            this.setState((state) => ({
              docker: {
                ...state.docker,
                [`${name}/${namespace}`]: pull_count
              }
            }))
          })
          if (previous) {
            this.fetchDockerImagePulls(org, previous)
          }
        }
      )
      .catch((err) =>
        console.error(
          `An error occurred while trying to fetch "${org}": ${err}`
        )
      )
  }

  fetchRequests() {
    Promise.all([
      analyze(csvHydraHitsPerMonth),
      analyze(csvOathkeeperHitsPerMonth),
      analyze(csvKetoHitsPerMonth),
      analyze(csvKratosHitsPerMonth)
    ]).then((services: number[][][]) => {
      const requests: { [key: number]: number } = {}

      services.forEach((rows) => {
        rows.forEach((row) => {
          requests[row[0]] = requests[row[0]]
            ? requests[row[0]] + row[1]
            : row[1]
        })
      })

      let max: number[] = [0, 0]
      Object.keys(requests).forEach((date: string) => {
        const amount = requests[parseInt(date)]

        if (amount > max[1]) {
          max = [parseInt(date), amount]
        }
      })

      this.setState(() => {
        return {
          requests: {
            amount: max[1],
            date: new Date(max[0])
          }
        }
      })
    })
  }

  componentDidMount() {
    this.fetchDockerImagePulls('oryd')
    this.fetchDockerImagePulls('oryam')

    this.fetchGitHubStars(0)
    this.fetchRequests()
  }

  render() {
    return (
      <div className={styles.stats}>
        <Container fluid={true} justify={'space-between'}>
          <Grid className={cn(styles.statsRow)} lg={4} md={3} sm={12} xs={12}>
            <ContentText>
              <Molecule>
                <h3 className={cn('font-h3', 'light', pb32)}>
                  {this.props.title}
                </h3>
                <p className={cn('font-p', 'light', 'mute-85')}>
                  {this.props.description}
                </p>
              </Molecule>
            </ContentText>
          </Grid>
          <Grid lg={6} md={8} sm={12} xs={12}>
            <Container alignItems={'start'}>
              {stats(this.state).map(
                ({ title, amount, description }, index) => (
                  <Grid lg={3} md={3} sm={3} xs={12} key={index}>
                    <Container
                      justify={'start'}
                      className={cn(styles.statsItems)}
                    >
                      <ContentText>
                        <Molecule>
                          <h5 className={cn('font-h1', 'light')}>
                            <AnimatedCounter countTo={amount} />
                          </h5>
                          <p className={cn('font-p-sm', 'light', 'mute-85')}>
                            {title}
                          </p>
                          <p className={cn('font-p-sm', 'light', 'mute-60')}>
                            {description}
                          </p>
                        </Molecule>
                      </ContentText>
                    </Container>
                  </Grid>
                )
              )}
            </Container>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Stats
