import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="error-img">
        <img src="./Images/error404.jpg" alt="404" />
      </div>
      <Link className="error-btn" to="/">
        Go Back
      </Link>
    </>
  );
}

export default Error;
