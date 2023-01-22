import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Menu() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {frontmatter: {order: ASC}}) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)
  return (
    <menu>
      <div className="pb-8">
        <Link to="/">
          <StaticImage src="../images/logo.png" alt="Darul Quran Aceh" placeholder="blurred"
            height={90} />
        </Link>
      </div>
      <ul>
        <li className="py-2 hover:translate-x-2 duration-300">
          <h5 className="md:text-[15px] md:font-semibold">
            <Link to="/" activeClassName="border-b border-dqa pb-3">
              Prolog
            </Link>
          </h5>
        </li>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id} className="py-2 hover:translate-x-2 duration-300">
            <h5 className="md:text-[15px] md:font-semibold leading-10">
              <Link
                to={`/${node.fields.slug}`}
                activeClassName="border-b border-dqa pb-3"
              >
                {node.frontmatter.title}
              </Link>
            </h5>
          </li>
        ))}
      </ul>
    </menu>
  )
}
