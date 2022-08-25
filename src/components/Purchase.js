import React, { useEffect, useState } from "react";
import "../style/Purchase.css";

const Purchase = () => {

  const orderNumber = localStorage.getItem('orderNumber')
  const token = localStorage.getItem('token')
  const firstName = localStorage.getItem('first_name')

  return (
    <>
      <div className="PurchaseContainer">
        <div>
          { token ?
            <h1>ORDER CONFIRMED - Thank You {firstName}!</h1>
            :
            <h1>ORDER CONFIRMED - Thank You!</h1>
          }
        </div>
        <br></br>
        <h3>Order Number: {orderNumber}</h3>
        <br></br>
        <br></br>
        <span>You have purchased your items and they will be shipped shortly. Thank you for shopping with Top Secret Shirts LA. Mention us to your friends or family through social media, we appreciate the love and support!</span>
        <br></br>
        <br></br>
        <span>Feel free to check our socials at the bottom left-hand corner of the page.</span>
        <br></br>
        <br></br>
        <span>Looking forward to seeing you again!</span>
        <br></br>
        <button>Print Receipt</button>
      </div>
    </>
  );
};

export default Purchase;