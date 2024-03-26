import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../FetchingApi/Slice/userSlice";

const LogIn = () => {
  const [loginData, setLogInData] = useState({ email: "", password: "" });
  // const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.map((u) => ({ ...u, isAuthentication: false }));

    if (!loginData.email || !loginData.password) {
      alert("please fill in all fields");
      return;
    }

    if (
      users.some(
        (u) => u.email === loginData.email && u.password === loginData.password
      )
    ) {
      const Index = users.findIndex((el) => el.email === loginData.email);
      users[Index].isAuthentication = true;
      localStorage.setItem("users", JSON.stringify(users));
      dispatch(addUser(users));

      navigate("/");
    } else if (users.every((u) => u.email !== loginData.email)) {
      alert("invalid email");
    } else if (users.every((u) => u.password !== loginData.password)) {
      alert("invalid password");
    } else {
      alert("invalid input");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center p-4"
      style={{ height: "91vh" }}
    >
      <div
        className=" p-4 border rounded"
        style={{
          height: "25rem",
          width: "25rem",
          boxShadow: "2px -1px 20px -4px rgba(0,0,0,0.75)",
        }}
      >
        <h3 className="mt-3">Login</h3>
        <label className="mt-2">Email:</label>
        <Input
          placeholder="email"
          className="mt-2"
          value={loginData.email}
          onChange={(e) =>
            setLogInData({ ...loginData, email: e.target.value })
          }
        />
        <label className="mt-3">Password:</label>
        <Input.Password
          placeholder="password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          className="mt-2"
          value={loginData.password}
          onChange={(e) =>
            setLogInData({ ...loginData, password: e.target.value })
          }
        />

        <Button
          type="primary"
          className="my-3 w-100"
          onClick={() => {
            handleSubmit();
          }}
        >
          LOGIN
        </Button>

        <Link to={"/register"}>New user?</Link>
      </div>
    </div>
  );
};

export default LogIn;
