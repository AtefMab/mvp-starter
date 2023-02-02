import React, { useState } from "react";
import axios from "axios";

const Login = ({ setdata, setview }) => {
  let user = "";
  let password = "";

  const log = (user, password) => {
    axios
      .get(`http://localhost:3000/api/posts/get/${user}/${password}`)
      .then((res) => {
        if (res.data.length === 0) {
          alert("check your username or password ");
          return false;
        } else {
          setdata(res.data);
          setview("HomeandProfile");
        }
      });
  };
  return (
    <div>
      <div id="login">
        <img
          id="back"
          src="https://images.unsplash.com/photo-1561022107-23ba5b910e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8THZubVUtMk5kV0l8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60"
        ></img>
        <div id="loginherewriting"> login here</div>

        <ul id="ullogin">
          <li id="liloginname">
            <input
              required="true"
              type="text"
              id="namelogin"
              placeholder="name"
              onChange={(e) => {
                user = e.target.value;
              }}
            ></input>
          </li>
          <li>
            <input
              required="true"
              type="password"
              id="passwordlogin"
              placeholder="password"
              onChange={(e) => (password = e.target.value)}
            ></input>
          </li>
          <li>
            <button
              id="submit"
              onClick={(e) => {
                e.preventDefault;
                log(user, password);
              }}
            >
              submit
            </button>
          </li>
        </ul>
        <p id="paragraphlogin">
          Artsy is a small idea for users to enjoy what the internet has to
          offer ! Welcome we Can't wait to meet you again .
        </p>
        <p id="notamember">
          Not a member yet ? Sign Up
          <button
            id="registerbutt"
            onClick={() => {
              setview("Register");
            }}
          >
            Here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
