import * as React from "react"
import {Link} from "gatsby"
import CookieConsent from "react-cookie-consent";
import {CookieContext} from "../utils/cookie-context";

const Layout = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    const {consent, setConsent} = React.useContext(CookieContext)

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
                    style={{background: "#134f5c"}}
                    buttonStyle={{color: "#4e503b", background: "#FFFFFF", fontSize: "14px", borderRadius: "7%"}}
                    expires={150}
                    onAccept={
                        () => {
                            console.log(consent)
                            setConsent(true)
                        }
                    }
                >
                    This website uses cookies to improve the user experience and to allow you to write and read post's comments.{" "}
                </CookieConsent>
            </div>
    )
}

export default Layout
