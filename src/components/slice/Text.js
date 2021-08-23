import React from 'react'
import RichText from '../RichTextCustom'

export default function Text({ text }) {
  console.log('text_content: ', text)

  return <RichText render={text.raw} />
}
