import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  // Context
  const [auth, setAuth] = useAuth();
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Get User Data

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
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
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
                              USER PROFILE
                            </p>

                            <form
                              onSubmit={handleSubmit}
                              className="mx-1 mx-md-4"
                            >
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
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
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

                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button
                                  type="submit"
                                  className="btn btn-outline-success btn-lg rounded"
                                >
                                  Update
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
