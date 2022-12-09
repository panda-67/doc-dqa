import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          body
          frontmatter {
            title
          }
        }
      }
    }
  `);
  return (
    <>
      <div>
        <ul>
          {data.allMdx.nodes.map((node) => (
            <li key={node.id}>
              <h5 className="md:text-[15px]">
                <Link to={`/${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h5>
            </li>
          ))}{" "}
        </ul>
      </div>
    </>
  )
}

export default Menu
