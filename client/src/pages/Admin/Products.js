import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import ProductForm from "../../components/Form/ProductForm";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };
  // Use effect category
  useEffect(() => {
    getAllCategory();
  }, []);

  // Handle Success
  const handleSuccess = () => {
    setIsModalVisible(false);
    navigate("/dashboard/admin/products");
    window.location.reload();
  };

  // get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong ");
    }
  };

  //   Use effect products
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"Dashboard - Products"}>
      <div className="container-fluid m-3 p-4">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center">
              <h1>All Products list</h1>
              <div className="col-md-3">
                <i
                  className="ri-add-circle-line"
                  onClick={() => setIsModalVisible(true)}
                ></i>
                <ProductForm
                  visible={isModalVisible}
                  onCancel={() => setIsModalVisible(false)}
                  onSuccess={handleSuccess}
                  categories={categories}
                />
              </div>
            </div>
            <div className="d-flex">
              {products?.map((p) => (
                <Link
                  to={`/dashboard/admin/product/${p.slug}`}
                  key={p._id}
                  className="product-link"
                >
                  <div className="card m-2" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      height={"300px"}
                      width={"250px"}
                      src={`/api/v1/product/product-photo/${p._id}`}
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
