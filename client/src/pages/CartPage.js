import React from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

import removeIMG from "../images/remove.png";

const CartPage = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();

  // Total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "PHP",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   remove cart item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <hr />
            <h4 className="text-center">
              {cart?.length > 1
                ? `You have ${cart.length} items in your cart ${
                    auth?.token ? "" : "Please login to checkout"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-9">
            {cart?.map((p) => (
              <div className="row mb-2 p-3 flex-row card">
                <div className="col-md-4 product-thumbnail ">
                  <img
                    className="card-img-top"
                    src={`/api/v1/product/product-photo/${p._id}`}
                    width={"200px"}
                    height={"250"}
                    alt={p.name}
                  />
                </div>
                <div className="col-md-8 px-2 py-3">
                  <h5>{p.name}</h5>
                  <p className="text-secondary">{p.description}</p>
                  <p>₱ {p.price}</p>
                  <img
                    src={removeIMG}
                    alt="remove"
                    className="remove"
                    width={"35px"}
                    height={"35px"}
                    onClick={() => removeCartItem(p._id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-3 text-center">
            <h4>Cart Summary</h4>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total : {totalPrice()} </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
