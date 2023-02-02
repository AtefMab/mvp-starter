import React, { useState } from "react";
import axios from "axios";

const Register = ({ setdata, setview }) => {
  let user = "";
  let password = "";

  const log = (user, password) => {
    axios
      .post(`http://localhost:3000/api/posts/postUser`, {
        username: user,
        password: password,
      })
      .then((res) => {
        if (!res.data.length) {
          alert(
            "Register Successful ! please Login with your username and Password"
          );
          setview("Login");
        } else {
          alert(
            "Error occured registering You to our Database . try again later :)"
          );
        }
      });
  };
  return (
    <div id="Register">
      <img
        id="imgregister"
        src="https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ></img>
      <div id="registerinfo"> Type In your Infos</div>

      <input
        required="true"
        type="text"
        id="nameregister"
        placeholder="write your username"
        onChange={(e) => {
          user = e.target.value;
        }}
      ></input>

      <input
        required="true"
        type="password"
        id="passwordregister"
        placeholder="write your password"
        onChange={(e) => (password = e.target.value)}
      ></input>

      <button
        id="submitregister"
        onClick={(e) => {
          e.preventDefault;
          log(user, password);
        }}
      >
        submit
      </button>

      <p id="member">
        Already a member? Login
        <button
          id="loginregister"
          onClick={() => {
            setview("Login");
          }}
        >
          Here
        </button>
      </p>
    </div>
  );
};

export default Register;
