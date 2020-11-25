import React, { useEffect, useState } from 'react'
import fetch from 'node-fetch'
import Prism from 'prismjs'
import { graphql, useStaticQuery } from 'gatsby'

interface Props {
  src: string
  startAt?: string
  endAt?: string
}

const detectLanguage = (src: string) => {
  const ext = src.split('.').pop()
  switch (ext) {
    case 'jsx':
      return 'jsx'
    case 'tsx':
      return 'tsx'
    case 'ts':
      return 'typescript'
    case 'go':
      return 'go'
    case 'yaml':
    case 'yml':
      return 'yaml'
    case 'js':
      return 'javascript'
    case 'html':
      return 'html'
    case 'pug':
      return 'pug'
    default:
      return ext
  }
}

const findLine = (needle: string | undefined, haystack: string[]) => {
  if (!needle) {
    return 0
  }

  const index = haystack.findIndex((s) => s.indexOf(needle) > -1)

  if (index === -1) {
    return 0
  }

  return index
}

const transform = ({ startAt, endAt, src }: Props) => (content: string) => {
  let lines = content.split('\n')
  let startIndex = findLine(startAt, lines)
  let endIndex = findLine(endAt, lines)

  if (endAt) {
    lines.splice(endIndex, -1)
    lines.push('', '// ...')
  }

  if (startAt) {
    lines.splice(0, startIndex)
    lines.unshift('// ...', '')
  }

  const lang = detectLanguage(src)
  return Prism.highlight(
    lines.join('\n'),
    Prism.languages[lang as any],
    lang as any
  )
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
  const [content, setContent] = useState(
    initialState(
      props,
      useStaticQuery(graphql`
        {
          allRemoteFile {
            nodes {
              url
              content
            }
          }
        }
      `)
    )
  )

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

  const lang = detectLanguage(props.src)
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
