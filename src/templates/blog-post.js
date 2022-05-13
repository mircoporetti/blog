import * as React from "react"
import {Link, graphql} from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import {DiscussionEmbed} from "disqus-react"

import {CookieContext} from "../utils/cookie-context";
import {useContext, useEffect} from "react";
import {FaComments} from "react-icons/all";
import { useLocation } from '@reach/router';

const BlogPostTemplate = ({data, location}) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const {previous, next} = data
    const postTitle = post.frontmatter.title
    const currentPage = useLocation()
    const disqusConfig = {
        shortname: "mircoporetti",
        config: {identifier: postTitle, url: currentPage.href},
    }

    const {consent} = useContext(CookieContext)

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        forceUpdate();
    }, [consent])

    return (
        <Layout location={location} title={siteTitle}>
            <Seo
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </header>
                <section
                    dangerouslySetInnerHTML={{__html: post.html}}
                    itemProp="articleBody"
                />
                <hr/>
                <footer>
                    <Bio/>
                </footer>
            </article>
            <nav className="blog-post-nav">
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
            {consent ?
            <DiscussionEmbed {...disqusConfig} />
                : <div style={{backgroundColor: "lightgrey"}}><FaComments/> Hey! You need to allow cookies to view comments for this post! <FaComments/></div>
            }
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`