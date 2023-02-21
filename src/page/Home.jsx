import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./Style.css";

const contentStyle = {
  height: "460px",
  color: "#fff",
  textAlign: "center",
};

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="info-con">
          <h5> Discount for Every Product Upto 10%</h5>
        </div>
        <Carousel autoplay>
          <div>
            <div className="off1">
              <h5>Trandy</h5>
              <h1>FASHION</h1>
              <h4>UPTO 50% OFF</h4>
              <h4>DON't MISS THE DEAL</h4>
            </div>
            <h3 style={contentStyle}>
              <img className="img-con" src="./Images/shopp1.jpg" alt="img1" />
            </h3>
          </div>
          <div>
            <div className="off2">
              <h2>Unlock</h2>
              <h1>YOUR NEW STYLE</h1>
            </div>
            <h3 style={contentStyle}>
              <img className="img-con" src="./Images/shopp2.jpg" alt="img2" />
            </h3>
          </div>
          <div>
            <div className="off3">
              <h2>BIG</h2>
              <h4>SALE</h4>
              <h5>DISCOUNT UP TO</h5>
              <h3>50%</h3>
            </div>
            <h3 style={contentStyle}>
              <img className="img-con" src="./Images/shopp3.jpg" alt="img3" />
            </h3>
          </div>
          <div>
            <div className="off4">
              <h2>THE GREAT FASHION</h2>
              <h4>COLLECTION</h4>
            </div>
            <h3 style={contentStyle}>
              <img className="img-con" src="./Images/shopp4.jpg" alt="img4" />
            </h3>
          </div>
        </Carousel>
        <div className="info-con2 text-center">
          <h2>Limited Time Offer for Casual Shirts</h2>
        </div>
      </div>
      <div className="banner">
        <div className="model-quote">
          <h1>BEING A TURE</h1>
          <h3>GENTLEMEN</h3>
          <h4>NEVER GOES OUT OF</h4>
          <h5>FASHION</h5>
          <div className="model-box"></div>
        </div>
        <div className="model-img">
          <img src="./Images/men1.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
