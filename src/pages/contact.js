import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import RichText from '../components/RichTextCustom'

export default function Contact({ data }) {
  const formTitle = data.prismicContactPage.data.form_title
  const formDescription = data.prismicContactPage.data.form_description
  const formFields = data.prismicContactPage.data.form_fields

  return (
    <Layout>
      <ContentWrapper>
        <RichText render={formTitle.raw} />
        <RichText render={formDescription.raw} />
        <Form
          name='contact'
          method='POST'
          data-netlify='true'
          action='/contact-success'
          onSubmit={e => e.preventDefault()}
        >
          <input type='hidden' name='form-name' value='contact' />
          {formFields.map((field, index) => {
            if (field.field_type === 'textarea') {
              return (
                <div key={`${index}`}>
                  <textarea
                    name={field.field_name}
                    required={field.required === 'Yes'}
                    placeholder={field.field_name}
                  />
                </div>
              )
            } else {
              return (
                <div key={`${index}`}>
                  <input
                    name={field.field_name}
                    required={field.required === 'Yes'}
                    type={field.field_type}
                    placeholder={field.field_name}
                  />
                </div>
              )
            }
          })}
          <Button type='submit'>Submit</Button>
        </Form>
      </ContentWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    prismicContactPage {
      data {
        form_title {
          html
          raw
          text
        }
        form_description {
          html
          raw
          text
        }
        form_fields {
          field_name
          field_type
          required
        }
      }
    }
  }
`

const ContentWrapper = styled.section`
  max-width: 800px;
  margin: 20px auto;
`

const Form = styled.form`
  padding: 10px;
  background: #eee;
  margin-top: 20px;
  max-width: 800px;
  margin: 0 auto;

  input {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 40px;
    border: 1px solid #eee;
    width: 100%;
  }

  textarea {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 100px;
    border: 1px solid #eee;
    width: 100%;
    resize: none;
  }
`

const Button = styled.button`
  background: orange;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 4px;
  border: 1px solid;
`
