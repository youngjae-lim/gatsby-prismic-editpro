import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styled from 'styled-components'

export default function Code({ language, children }) {
  return (
    <CodeWrapper>
      <SyntaxHighlighter
        style={dracula}
        language={language}
        showLineNumbers={false}
        wrapLines={true}
      >
        {children}
      </SyntaxHighlighter>
    </CodeWrapper>
  )
}

const CodeWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
