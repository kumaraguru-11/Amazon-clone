import React from "react";
import SearchBar from "../Components/SearchBar";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const NavBar = () => {
  const user=useSelector((state)=>state.user.user) || null;
  console.log(user)
  return (
    <Navbar
      className="bg-dark  d-flex justify-content-evenly position-sticky top-0"
      style={{ zIndex: "10" }}
    >
      <Navbar.Brand href="/" className="me-2">
        <svg
          height="20"
          width="80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-0.658000000000003 -1.875 384.24600000000004 119.917"
          className="d-inline-block"
        >
          <path
            fill="#FFFFFF"
            d="M81.633 27.542V64.65a2.268 2.268 0 0 1-2.268 2.268H67.651a2.269 2.269 0 0 1-2.268-2.268V4.292a2.268 2.268 0 0 1 2.268-2.268h10.84a2.268 2.268 0 0 1 2.268 2.268v8.5S84.634.667 96.134.667c0 0 11.375-1.375 16 11.25 0 0 3.875-11.25 15.625-11.25 0 0 17.474-1.039 17.474 17.042l.133 9.958v37.108a2.268 2.268 0 0 1-2.268 2.268h-11.715a2.269 2.269 0 0 1-2.268-2.268l-.107-40.483c.333-9.167-7.083-8.5-7.083-8.5-9.333.167-8.435 11.875-8.435 11.875v37.108a2.268 2.268 0 0 1-2.268 2.268H99.508a2.269 2.269 0 0 1-2.268-2.268V25.208s.685-9.5-7.649-9.5c.001 0-8.249-1.083-7.958 11.834zM383.588 27.431v37.107a2.269 2.269 0 0 1-2.268 2.268l-12.183.236a2.269 2.269 0 0 1-2.268-2.268V25.208s.685-9.5-7.648-9.5c0 0-7.959-.392-7.959 14.503v34.438a2.269 2.269 0 0 1-2.268 2.268h-11.715a2.269 2.269 0 0 1-2.268-2.268V4.292a2.269 2.269 0 0 1 2.268-2.268h10.84a2.268 2.268 0 0 1 2.268 2.268v8.5S354.262.667 365.762.667c0 0 12.319-1.869 16.468 11.015.001-.001 1.358 2.657 1.358 15.749zM299.008.417c-14.98 0-27.125 12.625-27.125 33.875 0 18.709 9.375 33.875 27.125 33.875 16.75 0 27.125-15.166 27.125-33.875 0-20.875-12.144-33.875-27.125-33.875zm9.455 34.625c0 8-1 12.25-1 12.25-1.423 8.457-7.562 8.469-8.467 8.424-.977.039-7.168-.049-8.449-8.424 0 0-1-4.25-1-12.25v-1.333c0-8 1-12.25 1-12.25 1.281-8.375 7.473-8.463 8.449-8.425.905-.045 7.044-.034 8.467 8.425 0 0 1 4.25 1 12.25zM265.084 12.708v-8.66a2.269 2.269 0 0 0-2.268-2.268h-38.72a2.268 2.268 0 0 0-2.268 2.268v8.593a2.269 2.269 0 0 0 2.268 2.268h20.197l-23.906 34.68s-.942 1.406-.911 2.959v10.549s-.156 3.617 3.946 1.518c0 0 7.286-4.402 19.503-4.402 0 0 12.065-.15 20.109 4.781 0 0 3.339 1.518 3.339-1.82v-9.182s.303-2.43-2.884-3.947c0 0-9.258-5.084-21.399-4.25zM56.342 56.124l-3.667-5.582c-1.167-2.084-1.083-4.418-1.083-4.418V20.375C52.092-1.875 27.425.042 27.425.042 5.497.042 2.258 17.107 2.258 17.107c-.914 3.431 1.744 3.514 1.744 3.514l10.715 1.087s1.827.418 2.492-1.757c0 0 1.411-7.445 9.302-7.445 8.586 0 8.497 7.369 8.497 7.369v6.169c-17.14.573-25.083 5.331-25.083 5.331-10.583 6-9.917 17.917-9.917 17.917 0 19.416 18.5 18.582 18.5 18.582 11.833 0 18.833-8.666 18.833-8.666 2.083 3.668 5.917 7.166 5.917 7.166 1.918 2.08 3.917.334 3.917.334l8.667-7.416c1.916-1.418.5-3.168.5-3.168zm-32.059-.24c-5.566 0-7.635-5.531-6.711-10.967.925-5.436 5.729-9.708 17.437-9.583v3.305c.415 14.438-6.093 17.245-10.726 17.245zM212.008 56.124l-3.666-5.582c-1.167-2.084-1.084-4.418-1.084-4.418V20.375c.5-22.25-24.167-20.333-24.167-20.333-21.928 0-25.167 17.065-25.167 17.065-.914 3.431 1.744 3.514 1.744 3.514l10.715 1.087s1.827.418 2.492-1.757c0 0 1.411-7.445 9.302-7.445 8.586 0 8.497 7.369 8.497 7.369v6.169c-17.139.573-25.083 5.331-25.083 5.331-10.583 6-9.917 17.917-9.917 17.917 0 19.416 18.5 18.582 18.5 18.582 11.833 0 18.833-8.666 18.833-8.666 2.084 3.668 5.916 7.166 5.916 7.166 1.918 2.08 3.918.334 3.918.334l8.666-7.416c1.917-1.418.501-3.168.501-3.168zm-32.059-.24c-5.566 0-7.635-5.531-6.711-10.967.925-5.436 5.729-9.708 17.436-9.583v3.305c.416 14.438-6.091 17.245-10.725 17.245z"
          />
          <g fill="#f3971b">
            <path d="M241.504 104.862s-.98 1.705.224 2.086c0 0 1.36.531 3.056-1.043 0 0 12.369-10.805 12.667-30.477 0 0 .091-2.457-.895-3.129 0 0-3.875-3.428-17.809-2.385 0 0-12.146.82-18.777 6.707 0 0-.596.521-.596 1.191 0 0-.143 1.447 3.502.82 0 0 12.145-1.715 19.373-.82 0 0 3.727.447 4.77 1.715 0 0 1.714 1.416.819 6.109 0 .002-2.46 11.924-6.334 19.226z" />
            <path d="M239.055 85.989s1.814 2.35-1.113 4.377c0 0-31.267 25.01-83.767 25.01 0 0-54.042 2.666-99.167-38.334 0 0-1.582-1.389-.6-2.68 0 0 .878-1.188 3.151.104 0 0 42.449 26.451 98.199 26.451 0 0 38.75 1.5 78.5-15.5 0 0 3.167-1.641 4.797.572z" />
          </g>
        </svg>
      </Navbar.Brand>

      <div className="w-50 me-2">
        <SearchBar />
      </div>

      <Link to={"/login"} style={{ textDecoration: "none" }}>
        <Button className="mx-1" type="primary">
          Login
        </Button>
      </Link>

      <div className="mx-1" style={{ cursor: "pointer" }}>
        <Link
          to="/cart"
          style={{ textDecoration: "none" }}
          className="text-light"
        >
          <span>Cart</span>
        </Link>
      </div>
    </Navbar>
  );
};

export default NavBar;
