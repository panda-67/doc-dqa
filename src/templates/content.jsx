import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }) {
  return (
    <Layout>
      <h2 className=" text-dqa">{data.mdx.frontmatter.title}</h2>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </Layout>
  )
}

export const Head = ({data:{mdx:{frontmatter}}}) => <title>DQA - Dokumentasi | {frontmatter.title}</title>

export const contentQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`