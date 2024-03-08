import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isAuthentication:true
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!user.name || !user.email || !user.password) {
      alert("Please fill in all fields");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    setUser({
      name: "",
      email: "",
      password: "",
      isAuthentication:true
    });
    navigate('/');
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
