import React, { useEffect, useState } from 'react'
import * as styles from './stats-content.module.css'
import cn from 'classnames'
import parse from 'csv-parse'
import dateformat from 'dateformat'
import csvHydraHitsPerMonth from 'raw-loader!../stats/hydra/hits-per-month.csv'
import csvOathkeeperHitsPerMonth from 'raw-loader!../stats/oathkeeper/hits-per-month.csv'
import csvKetoHitsPerMonth from 'raw-loader!../stats/keto/hits-per-month.csv'
import csvKratosHitsPerMonth from 'raw-loader!../stats/kratos/hits-per-month.csv'
import AnimatedCounter from './animated-counter'
import Molecule from '../../../freestanding/molecule/molecule'
import StatsBox from './stats-box'

const countGitHubStars = (state: StateTypes) => {
  if (state.github) {
    Object.keys(state.github)
      .map((repo) => {
        if (state.github) {
          state.github[repo]
        }
      })
      .reduce((p: number, n: number) => p + n, 0)
  }
}

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

type GitHub = {
  [repo: string]: number
}

type Docker = {
  [repo: string]: number
}

interface StateTypes {
  docker?: Docker
  github?: GitHub
  requests?: {
    amount?: number
    date?: Date
  }
}

const StatsContent = () => {
  const [state, setState] = useState<StateTypes>({
    requests: { amount: 0, date: new Date() },
    docker: {},
    github: {}
  })

  const fetchGitHubStars = (page = 0) => {
    const url = `https://corsar.ory.sh/orgs/ory/repos?__host=api.github.com&__proto=https&per_page=100&page=${page}`
    fetch(url)
      .then((body) => body.json())
      .then((repos) => {
        repos.forEach(({ stargazers_count, name }: any) => {
          setState((state) => {
            return {
              github: {
                ...state.github,
                [name]: stargazers_count
              },
              requests: {
                ...state.requests
              },
              docker: {
                ...state.docker
              }
            }
          })
        })

        if (repos.length >= 100) {
          fetchGitHubStars(page + 1)
        }
      })
      .catch((err) =>
        console.error(
          `An error occurred while trying to fetch "${url}": ${err}`
        )
      )
  }

  const fetchDockerImagePulls = (org: string, url?: string) => {
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
            setState((state) => ({
              docker: {
                ...state.docker,
                [`${name}/${namespace}`]: pull_count
              },
              github: {
                ...state.github
              },
              requests: {
                ...state.requests
              }
            }))
          })
          if (previous) {
            fetchDockerImagePulls(org, previous)
          }
        }
      )
      .catch((err) =>
        console.error(
          `An error occurred while trying to fetch "${org}": ${err}`
        )
      )
  }

  const fetchRequests = () => {
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

      setState((state) => {
        return {
          requests: {
            amount: max[1],
            date: new Date(max[0])
          },
          github: {
            ...state.github
          },
          docker: {
            ...state.docker
          }
        }
      })
    })
  }

  useEffect(() => {
    fetchDockerImagePulls('oryd')
    fetchDockerImagePulls('oryam')

    fetchGitHubStars(0)
    fetchRequests()
  })

  return (
    <div className={cn(styles.statsContent)}>
      <div className="container-fluid--next">
        <div
          className={cn(
            'col-lg-3--next col-md-3--next col-sm-4--next col-xs-4--next'
          )}
        >
          <Molecule>
            <p className="font-h3">Billions of Identities</p>
            <p className="font-p">
              <a href="/" className={cn('font-link font-link-lg')}>
                Companies
              </a>{' '}
              from all over the world rely on Ory for their identity needs. Ory
              technology secures billions of identity requests.
            </p>
          </Molecule>
        </div>
        {stats(this.state).map(({ title, amount, description }) => (
          <StatsBox
            className={cn(
              'col-lg-3--next col-md-3--next col-sm-4--next col-xs-4--next'
            )}
          >
            <div key={title} className="font-h1">
              <AnimatedCounter countTo={amount} />
            </div>
            <div className={styles.textTitle}>{title}</div>
            <div className={styles.textDecription}>{description}</div>
          </StatsBox>
        ))}
      </div>
    </div>
  )
}

export default StatsContent
