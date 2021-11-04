import React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }) => {
  const { nodes } = data.allMdx;
  return (
    <Layout pageTitle="My blog posts">
      {nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        slug
      }
    }
  }
`;
