import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Header from "../components/Header";

const NotFound: React.FC = () => {
  return (
    <>
      <Header>Not Found</Header>
      <Layout>
        <h1>Page not found</h1>
        <Link to="/">Back to Feed</Link>
      </Layout>
    </>
  );
};

export default NotFound;
