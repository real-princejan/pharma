import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"404 Page Not Found - Pharma"}>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="ri-error-warning-line display-3 text-danger"></span>
              <br />
              <span className="display-2 text-black fw-bold">404</span>
              <h2 className="display-3 text-black fw-bolder">
                Oops! Page not found
              </h2>
              <p>
                <Link
                  to={"/"}
                  className="btn btn-md height-auto px-4 py-3 mt-5 btn-outline-success"
                >
                  Back to home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
