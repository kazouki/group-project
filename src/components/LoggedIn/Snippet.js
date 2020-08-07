import React,{useState} from "react";
import { CopyBlock, dracula } from "react-code-blocks";

import "../Snippet/Snippet.css";

export default function Snippet(props) {
  const [snippetState, setSnippetState] = useState({
    title: props.snippet?.title,
    snippet: props.snippet?.snippet,
  });
  return (
    <div className="snippet">
      <h4 className="snippetTitle">{snippetState.title}</h4>

      <div className="container mx-auto p-4">
        <CopyBlock
          language={"jsx"}
          text={`${snippetState?.snippet}`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
    </div>
  );
}
