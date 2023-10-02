import React, { useState, useEffect } from "react";

// import components
import Layout from "../components/Layout/Layout";
import pharmaIMG from "../images/pharma.jpg";
import { Link, useNavigate } from "react-router-dom";
// auth

import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Get all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) productFilter();
  }, [checked, radio]);

  // get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // Load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const productFilter = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"All Products - Pharmaceutical Store"}>
      {/* Hero */}
      <div
        className="site-blocks-cover"
        style={{ backgroundImage: `url(${pharmaIMG})` }} // Set the background image here
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="site-block-cover-content text-center"
              >
                <h2 className="sub-title text-dark">
                  Effective Medicine, New Medicine Everyday
                </h2>
                <h1 className="shadows">Welcome To Pharma</h1>
                <p>
                  <Link to="/store" className="btn btn-success px-5 py-3">
                    Shop Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 1 */}
      <div className="site-section">
        <div className="container">
          <div className="row align-items-stretch section-overlap">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap bg-primary h-100">
                <a className="h-100">
                  <h5>
                    Free <br /> Shipping
                  </h5>
                  <p>
                    Amet sit amet dolor
                    <strong>
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </strong>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap h-100">
                <a className="h-100">
                  <h5>
                    Season <br /> Sale 50% Off
                  </h5>
                  <p>
                    Amet sit amet dolor
                    <strong>
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </strong>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap bg-warning h-100">
                <a className="h-100">
                  <h5>
                    Buy <br /> A Gift Card
                  </h5>
                  <p>
                    Amet sit amet dolor
                    <strong>
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </strong>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="title-section text-center col-12">
              <h2 className="text-uppercase">Popular Products</h2>
            </div>
          </div>

          <div className="row">
            {products?.map((p) => (
              <div
                className="col-sm-6 col-lg-4 text-center item mb-4"
                key={p._id}
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <span className="tag">Sale</span>
                  <img
                    className="card-img-top"
                    height={"400px"}
                    width={"300px"}
                    src={`/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                  />

                  <div className="card-body d-flex flex-column justify-content-start">
                    <h3 className="text-dark">
                      <p>{p.name}</p>
                    </h3>
                    <p className="price text-center">₱ {p.price}</p>
                    <p className="card-text">
                      {p.description.substring(0, 30)}...
                    </p>

                    <a
                      onClick={() => navigate(`/product/${p.slug}`)}
                      className="buy-now btn btn-sm height-auto px-4 py-3 btn-warning mb-2"
                    >
                      More Details
                    </a>
                    <a className="buy-now btn btn-sm height-auto px-4 py-3 btn-success mb-2">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <Link to="/store" className="btn btn-primary px-4 py-3">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
