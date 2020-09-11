import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import "./DonateCss.css";
import YOUTUBE_THUMBNAIL_GENERATOR from "./img/YOUTUBE_THUMBNAIL_GENERATOR.png";
const App = () => {
  const publicKey = "pk_live_df8f2129f6e69db09eadb5883ffc69251d2e6d49";
  //   const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
      amount,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: () => {
      setEmail("");
      setName("");
      setPhone("");
      setAmount("");
    },
    onClose: () => alert("please Kindly Donate to mirewares"),
  };

  return (
    <div className="Appw">
      <div className="containern">
        <div className="item">
          {/* <div className="overlay-effect"></div>
          <img
            className="item-image"
            src={YOUTUBE_THUMBNAIL_GENERATOR}
            alt="product"
          /> */}
          <div className="item-details">
            <p className="item-details__title">Miwares Donation</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <br />
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label>Amount</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <p className="item-details__amount btn btn-success mt-3">
                NGN {amount / 100}
              </p>
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
