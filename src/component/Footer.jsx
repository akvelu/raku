import React from "react";
import {
  TwitterOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import "./Style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="copyrights">
          <div className="social-icons">
            <InstagramOutlined className="social-icon" />
            <FacebookOutlined className="social-icon" />
            <WhatsAppOutlined className="social-icon" />
            <TwitterOutlined className="social-icon" />
          </div>
          &copy; 2023 - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
