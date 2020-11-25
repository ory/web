import React, { useEffect, useState } from 'react'
import fetch from 'node-fetch'
import { Languages } from './codebox'
import Prism from 'prismjs'
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'

interface Props {
  src: string
  lang: Languages
  title: string
}

const CodeFromRemote = ({ lang, src }: Props) => {
  const { allRemoteFile } = useStaticQuery(graphql`
    {
      allRemoteFile {
        nodes {
          url
          content
        }
      }
    }
  `)

  let preloaded = allRemoteFile.nodes.find(
    ({ url }: { url: string }) => url === src.split('#')[0]
  )

  let initialState = ''
  if (preloaded) {
    initialState = Prism.highlight(
      preloaded.content,
      Prism.languages[lang],
      lang
    )
  }


  const location = src
    .replace('github.com', 'raw.githubusercontent.com')
    .replace('/blob/', '/')

  const [content, setContent] = useState(initialState)
  useSSE(() => {
    fetch(location)
      .then((body) => body.text())
      .then((content) => {
        // https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/App.tsx#L37-L65
        const params =
          location.match(
            /^https:\/\/raw.githubusercontent.com\/.+#L([0-9]+)-L([0-9]+)$/
          ) || []

        if (params.length === 3) {
          const lines = content.split('\n')
          lines.splice(0, Number(params[1]) - 1)
          // lines.splice(Number(params[2]) - Number(params[1]) - 1)
          return lines.join('\n')
        }

        return content
      })
      .then((content) => {
        setContent(Prism.highlight(content, Prism.languages[lang], lang))
      })
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
