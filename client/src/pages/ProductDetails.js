import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initial p details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      console.log("Similar Products Data:", data); // Log the data
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log("Error fetching similar products:", error);
    }
  };

  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mr-auto">
              <div className="border text-center">
                <img
                  src={`/api/v1/product/product-photo/${product._id}`}
                  className="card-img-top"
                  height={"500px"}
                  width={"400px"}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{product.name}</h2>
              <h6 className="text-secondary">Description</h6>
              <p>{product.description}</p>
              <h6 className="text-secondary">Category</h6>

              <p>{product.category?.name}</p>

              <p>
                <strong className="text-success h4">₱{product.price}.00</strong>
              </p>
              <div className="mb-5">
                <div className="input-group mb-3" style={{ maxWidth: 220 }}>
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-success js-btn-minus"
                      type="button"
                    >
                      −
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center"
                    defaultValue={1}
                    placeholder
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-success js-btn-plus"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <p>
                <a
                  href="cart.html"
                  className="buy-now btn btn-sm height-auto px-4 py-3 btn-success"
                >
                  Add To Cart
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Similar Product Section */}

      <div className="container">
        <div className="container">
          <h3 className="text-center">Similar Products</h3>
          {relatedProducts.length < 1 && (
            <p className="text-center">No Similar Products found</p>
          )}
          <div className="d-flex flex-wrap ">
            {relatedProducts?.map((p) => (
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

export default ProductDetails;
