import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Login from "./components/login.jsx";
import HomeandProfile from "./components/HomeandProfile.jsx";

import Register from "./components/register.jsx";

const App = () => {
  const [items, setItems] = useState([]);
  const [view, setview] = useState("Login");
  const [data, setdata] = useState([]);
  const vieew = () => {
    if (view === "Login") {
      return <Login setview={setview} setdata={setdata} />;
    } else if (view === "Register") {
      return <Register setview={setview} />;
    } else {
      return <HomeandProfile items={items} data={data} setview={setview} />;
    }
  };
  useEffect(() => {
    $.ajax({
      url: "http://localhost:3000/api/posts/get",
      success: (data) => {
        console.log(data);
        setItems(data);
      },
      error: (err) => {
        console.log("err", err);
      },
    });
  }, []);

  return <div>{vieew()}</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
