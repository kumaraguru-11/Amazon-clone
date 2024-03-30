import React from "react";
import error from "../assest/404 error.gif";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <img src={error} alt="Error Img" height={400} width={400} />
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
};

export default PageNotFound;
