import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../FetchingApi/Slice/userSlice";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    // image: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!user.name || !user.email || !user.password) {
      alert("Please fill in all fields");
      return;
    }
    //get user from the localstorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // Update existing users authentication status
    users.length > 0 && users.map((u) => ({ ...u, isAuthentication: false }));

    // Add the new user with isAuthentication set to true
    const newUser = { ...user, isAuthentication: true };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    dispatch(addUser(newUser));
    navigate("/");

    setUser({
      name: "",
      email: "",
      password: "",
      image: {},
      isAuthentication: true,
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center p-5"
      style={{ height: "91vh" }}
    >
      <div
        className=" p-3 border rounded"
        style={{
          height: "28rem",
          width: "25rem",
          boxShadow: "2px -1px 20px -4px rgba(0,0,0,0.75)",
        }}
      >
        <h3 className="mt-2">Register</h3>

        <label className="mt-2">Name:</label>
        <Input
          placeholder="name"
          className="mt-2"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
        />

        <label className="mt-2">Email:</label>
        <Input
          placeholder="email"
          className="mt-2"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />

        <label className="mt-3">Password:</label>
        <Input.Password
          placeholder="password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          className="mt-2"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
        />

        <Button
          type="primary"
          className="my-3 w-100"
          onClick={() => handleSubmit()}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
