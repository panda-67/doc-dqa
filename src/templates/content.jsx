import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"

const shortcodes = { Link }; // Provide common components here

const Template = ({ data, children }) => {
	return (
		<Layout>
			<div className="content min-h-screen md:px-8 pt-2">
				<h2 className=" text-dqa">{data.mdx.frontmatter.title}</h2>
				<MDXProvider components={shortcodes}>{children}</MDXProvider>
			</div>
		</Layout>
	)
}

export default Template

export const Head = ({
	data: {
		mdx: { frontmatter },
	},
}) => <title>{frontmatter.title} | DQA - Dokumentasi</title>;

export const contentQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }	
    }
  }
`