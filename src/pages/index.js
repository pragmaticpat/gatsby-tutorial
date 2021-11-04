import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby tutorial 💜</p>
    <StaticImage
      alt="Mountain range from phoenix az"
      src="../../images/mountains.jpeg"
    ></StaticImage>
  </Layout>
);

export default IndexPage;
