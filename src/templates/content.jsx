import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import { useState } from "react"

const slugify = require(`@sindresorhus/slugify`)
const shortcodes = { Link }; // Provide common components here

const Template = ({ data: { mdx }, children }) => {
	const headings = mdx.headings
	const [tocOpen, setTocOpen] = useState(false)
	const tocToggle = () => {
		setTocOpen(!tocOpen)
	}

	return (
		<Layout>
			<div className="md:px-8 pt-2">
				<h2 className=" text-dqa">{mdx.frontmatter.title}</h2>
				
				<div className="my-2 -ml-1 px-4 py-3 rounded-lg bg-stone-100 dark:bg-stone-700 duration-300 ease-in">
					<button onClick={tocToggle} className="font-light hover:text-dqa">Daftar Isi</button>
					<ul className={`ml-2 ${tocOpen ? '' : 'hidden'}`}>
						{headings.map((header) => (
							<li key={header.value} className="hover:text-sky-500 font-thin text-sm">
								<Link to={`#${slugify(header.value)}`}>{header.value}</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="content">
					<MDXProvider components={shortcodes}>{children}</MDXProvider>
				</div>
				
				<br /><br />
				<>Demikianlah penjelasan pada bagian {mdx.frontmatter.title}, semoga dapat bermanfaat. Bila kurang jelas silahkan menghubungi developer.</>
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
		headings {
			value
		}
    }
  }
`