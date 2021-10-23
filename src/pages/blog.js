import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
      {data.allFile.nodes.map((node) => (
        <li key={node.name}>{node.name}</li>
      ))}
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  {
    allFile {
      nodes {
        name
      }
    }
  }
`;
