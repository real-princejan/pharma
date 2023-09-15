import React from "react";

// import components
import Layout from "../components/Layout/Layout";

// auth
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title={"Best pharmaceutical online store"}>
      <h1>Homepage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
