import * as React from "react"
import "./Layout.css"
import styled from "styled-components"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

const Main = styled.main`
  margin: 0 auto;
`
