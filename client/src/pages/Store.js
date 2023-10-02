import React, { useState, useEffect } from "react";

// import components
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// auth

import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";

const Store = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart([]);
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

  // Filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
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
    <Layout title={"Our Store - Pharma"}>
      {/* Section 2 */}
      <div className="row mt-3">
        <div className="col-md-3">
          {/* Filter by category */}
          <h5 className="text-center">Filter by category</h5>
          <div className="d-flex flex-column mx-5">
            {categories?.map((c) => (
              <Checkbox
                className="m-1"
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* Filter  by price */}
          <h5 className="text-center mt-4">Filter by price</h5>
          <div className="d-flex flex-column mx-5 ">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio className="m-1" value={p.array}>
                    {p.name}
                  </Radio>
                </div>
              ))}
            </Radio.Group>
          </div>

          <div className="d-flex flex-column mx-5 p-4">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTER
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <h1 className="text-dark m-2">All Products</h1>
          <div className="d-flex flex-wrap ">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  height={"400px"}
                  width={"300px"}
                  src={`/api/v1/product/product-photo/${p._id}`}
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
                    onClick={() => navigate(`/product/${p.slug}`)}
                    className="buy-now btn btn-sm height-auto px-4 py-3 btn-warning mb-2"
                  >
                    More Details
                  </a>
                  <a
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item added to cart");
                    }}
                    className="buy-now btn btn-sm height-auto px-4 py-3 btn-success mb-2"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-primary px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Load more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Store;
