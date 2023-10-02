import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/Search";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body d-flex flex-column justify-content-start">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text text-secondary text-center">
                    ₱ {p.price}
                  </p>
                  <a
                    onClick={() => navigate}
                    className="buy-now btn btn-sm height-aut o px-4 py-3 btn-warning mb-2"
                  >
                    More Details
                  </a>
                  <a className="buy-now btn btn-sm height-auto px-4 py-3 btn-success mb-2">
                    Add To Cart
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
