import React from "react";
import { useState } from "react";
import "./Login.css";

import reg from "../../images/signup.svg";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
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
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register - Pharma"}>
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
                        Sign up
                      </p>

                      <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                        {/* Name */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="ri-user-line ri-xl mb-1 mx-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              id="formName"
                              className="form-control"
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>

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
                              placeholder="Email Address"
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
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              id="forPass"
                              className="form-control"
                              placeholder="Password"
                              required
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="ri-smartphone-line ri-xl mb-1 mx-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              id="formNum"
                              className="form-control"
                              placeholder="Phone Number"
                              required
                            />
                          </div>
                        </div>

                        {/* Address */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="ri-home-5-line ri-xl mb-1 mx-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              id="formAddress"
                              className="form-control"
                              placeholder="Address"
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
                              id="formAddress"
                              className="form-control"
                              placeholder="What is your first pet name"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <label className="form-check-label text-secondary">
                            Already have an account?{" "}
                            <Link className="text-success no-dec" to="/login">
                              Login Here
                            </Link>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-outline-success btn-lg rounded"
                          >
                            Register
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
                      <img className="floating" src={reg} />
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

export default Register;
