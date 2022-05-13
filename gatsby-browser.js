// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism-okaidia.css"

// Cookie Context Provider
import Provider from "./src/utils/cookie-context"
export const wrapRootElement = Provider;

