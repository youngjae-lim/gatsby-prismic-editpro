import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

export default function Header() {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      navigation: prismicNavigation {
        data {
          branding
          navigation_links {
            label
            link {
              id
              document {
                ... on PrismicPage {
                  uid
                }
                ... on PrismicContactPage {
                  uid
                }
              }
            }
          }
        }
      }
    }
  `)

  const links = data.navigation.data.navigation_links
  const branding = data.navigation.data.branding

  return (
    <HeaderStyle>
      <Branding>
        <Link to={`/`}>{branding}</Link>
      </Branding>
      <NavLinks>
        {links.map(link => (
          <LinkWrapper key={link.link.id}>
            <Link to={`/${link.link.document.uid}`}>{link.label}</Link>
          </LinkWrapper>
        ))}
      </NavLinks>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  display: flex;
  background: black;
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

const Branding = styled.div`
  color: orange;
  font-weight: bold;
  margin: auto 0;
  font-size: 25px;

  a {
    text-decoration: none;
    color: white;

    &[aria-current='page'] {
      color: orange;
    }
  }
`

const NavLinks = styled.div`
  display: flex;
  margin-left: auto;
`

const LinkWrapper = styled.div`
  margin: auto 0;

  a {
    color: white;
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;

    &[aria-current='page'] {
      color: orange;
    }

    &:hover {
      color: orange;
    }
  }
`
