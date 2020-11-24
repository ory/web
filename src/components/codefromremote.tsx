import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import { Languages } from "./codebox";
import Prism from "prismjs";

interface Props {
  src: string
  lang:  Languages
  title: string
}

const CodeFromRemote = ({ title, lang, ...props }: Props) => {
  const [content, setContent] = useState("");
  let { src } = props;

  src = src
    .replace("github.com", "raw.githubusercontent.com")
    .replace("/blob/", "/");

  useEffect(() => {
    fetch(src)
      .then(body => body.text())
      .then(content => {
        // https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/App.tsx#L37-L65
        const params =
          src.match(
            /^https:\/\/raw.githubusercontent.com\/.+#L([0-9]+)-L([0-9]+)$/
          ) || [];

        if (params.length === 3) {
          const lines = content.split("\n");
          lines.splice(0, Number(params[1]) - 1);
          lines.splice(Number(params[2]) - Number(params[1]) - 1);
          return lines.join("\n");
        }

        return content
      })
      .then((content) => {
        setContent( Prism.highlight(
          content,
          Prism.languages[lang],
          lang
        ))
      })
      .catch(console.error);
  }, []);

  return (
    <div className="gatsby-highlight" data-language={lang}>
      <pre className={`language-${lang}`}>
        <code className={`language-${lang}`}
          dangerouslySetInnerHTML={{ __html: content }} />
      </pre>
    </div>
  );
};

export default CodeFromRemote;
