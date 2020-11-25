import React, { useEffect, useState } from 'react'
import fetch from 'node-fetch'
import { Languages } from './codebox'
import Prism from 'prismjs'
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'

interface Props {
  src: string
  lang: Languages
  title: string,
  startAt?: string
  endAt?: string
}

const findLine = (needle: string | undefined, haystack: string[]) => {
  if (!needle) {
    return 0
  }

  const index = haystack.findIndex((s) =>
    s.indexOf(needle) > -1)

  if (index === -1) {
    return 0
  }

  return index
}

const transform = (
  { lang, startAt, endAt }: Props
) => (content: string) => {
  const lines = content.split('\n')
  let startIndex = findLine(startAt, lines)
  let endIndex = findLine(endAt, lines)

  if (startAt) {
    lines.splice(0, startIndex)
  }

  if (endAt) {
    lines.splice(endIndex - startIndex)
  }

  return Prism.highlight(lines.join('\n'), Prism.languages[lang], lang)
}

const initialState = (props: Props, { allRemoteFile: { nodes } }: any) => {
  const { src } = props

  let preloaded = nodes.find(
    ({ url }: { url: string }) => url === src.split('#')[0]
  )

  if (!preloaded) {
    return ''
  }

  return transform(props)(preloaded.content)
}

const CodeFromRemote = (props: Props) => {
  const { lang } = props

  const [content, setContent] = useState(initialState(props, useStaticQuery(graphql`
    {
      allRemoteFile {
        nodes {
          url
          content
        }
      }
    }
  `)))

  useEffect(() => {
    const location = props.src
      .replace('github.com', 'raw.githubusercontent.com')
      .replace('/blob/', '/')
    fetch(location)
      .then((body) => body.text())
      .then(transform(props))
      .then(setContent)
      .catch(console.error)
  }, [])

  return (
    <div className="gatsby-highlight" data-language={lang}>
      <pre className={`language-${lang}`}>
        <code
          className={`language-${lang}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </pre>
    </div>
  )
}

export default CodeFromRemote
