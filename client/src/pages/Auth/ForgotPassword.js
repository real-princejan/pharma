import React from "react";
// import components
import "./Login.css";
import Layout from "../../components/Layout/Layout";

// images
import forgot from "../../images/forgot.svg";

// import childrens
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

// third party
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
    }
  };
  return (
    <Layout title={"Forgot Password - Pharma"}>
      <section>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div
                      className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                      data-aos="zoom-in-down"
                      data-aos-duration="1500"
                    >
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Reset Password
                      </p>

                      <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                        {/* Email */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="ri-mail-line ri-xl mb-1 mx-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              id="formEmail"
                              className="form-control"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>

                        {/* Password */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="ri-lock-2-line ri-xl mb-1 mx-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              id="forPass"
                              className="form-control"
                              placeholder="Enter a new Password"
                              required
                            />
                          </div>
                        </div>

                        {/* Answer */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="ri-question-line ri-xl mb-1 mx-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              value={answer}
                              onChange={(e) => setAnswer(e.target.value)}
                              id="formEmail"
                              className="form-control"
                              placeholder="Enter your first pet name"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-outline-info btn-lg rounded"
                          >
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* image */}
                    <div
                      className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                    >
                      <img className="floating" src={forgot} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
