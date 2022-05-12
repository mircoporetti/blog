import * as React from "react"
import { Link } from "gatsby"

import CookieConsent from "react-cookie-consent";


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
        <CookieConsent
            location="bottom"
            buttonText="Sure man!!"
            cookieName="mirco_poretti_blog"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
        >
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
        </CookieConsent>
    </div>
  )
}

export default Layout
