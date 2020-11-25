import React, { useState } from 'react'
import remark from 'remark'
// @ts-ignore
import remarkHtml from 'remark-html'

const Markdown = ({ markdown }: { markdown: string }) => {
  const [html, setHtml] = useState<string>('')
  remark()
    .use(remarkHtml)
    .process(markdown)
    .then((file) => {
      setHtml(file.toString())
    })
    .catch((err) => {
      console.error(err)
    })

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Markdown
