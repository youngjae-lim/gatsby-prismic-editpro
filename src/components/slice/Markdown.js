import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styled from 'styled-components'
import Code from './Code'

export default function Markdown({ markdown }) {
  return (
    <MarkdownWrapper>
      <ReactMarkdown
        components={Decorate}
        remarkPlugins={[gfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {markdown.text}
      </ReactMarkdown>
    </MarkdownWrapper>
  )
}

const MarkdownWrapper = styled.div`
  blockquote {
    border-left: 7px solid #b83131;
    background: #ebebeb;
    padding: 20px;
    margin: 20px 40px 20px;
  }

  .math-display {
    text-align: center;
    margin-bottom: 20px;
  }

  .katex-display {
    border: solid 1px #eee;
    padding: 10px 10px;
    margin: 5px auto;
    display: inline-block;
  }
`

const Decorate = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')

    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        children={String(children).replace(/\n$/, '')}
        showLineNumbers={false}
        wrapLines={true}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
  // em({ node, ...props }) {
  //   return <i style={{ color: 'red' }} {...props} />
  // },
  pre({ node, ...props }) {
    console.log(node)
    console.log(node.children[0].properties.className)
    return node.children[0].properties.className ? (
      <div
        style={{
          'margin': '0 0 1.45rem 0',
        }}
        {...props}
      />
    ) : (
      <pre {...props} />
    )
  },
}

// pre
// -webkit-text-size-adjust: 100%;
// font: 112.5%/1.45em georgia, serif;
// '-webkit-font-smoothing': 'antialiased';
// color: hsla(0, 0%, 0%, 0.8);
// 'font-weight': 'normal';
// 'font-kerning': 'normal';
// font-feature-settings: "kern", "liga", "clig", "calt";
// 'box-sizing': 'inherit';
// 'font-family': 'monospace, monospace';
// margin-left: 0;
// margin-right: 0;
// margin-top: 0;
// margin-bottom: 1.45rem;
// font-size: 0.85rem;
// line-height: 1.42;
// 'background': 'hsla(0, 0%, 0%, 0.04)';
// 'border-radius': '3px';
// 'overflow': 'auto';
// word-wrap: normal;
// padding: 1.45rem;

// code
// -webkit-text-size-adjust: 100%;
// font: 112.5%/1.45em georgia, serif;
// -webkit-font-smoothing: antialiased;
// color: hsla(0, 0%, 0%, 0.8);
// font-weight: normal;
// font-kerning: normal;
// font-feature-settings: "kern", "liga", "clig", "calt";
// word-wrap: normal;
// box-sizing: inherit;
// font-size: 0.85rem;
// border-radius: 3px;
// font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
// "Liberation Mono", Menlo, Courier, monospace;
// padding: 0;
// padding-top: 0.2em;
// padding-bottom: 0.2em;
// background: none;
// line-height: 1.42;
