import React from "react";

// import components
import Layout from "../components/Layout/Layout";

// auth
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title={"All Products - Pharmaceutical Store"}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
