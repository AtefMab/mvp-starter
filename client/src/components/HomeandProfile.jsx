import React, { useState } from "react";
import axios from "axios";
const HomeandProfile = ({ setview, items, user, data }) => {
  const [newdata, setnewdata] = useState([]);
  const [post, setpost] = useState("");
  const [namee, setnamee] = useState("");
  const [lastname, setlastname] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [note, setnote] = useState("");
  const [number, setnumber] = useState(0);
  const [search, setsearch] = useState("");
  const [rend, setrend] = useState(false);
  // const searchhandler = (e) => {
  //   e.target.value.toLowerCase();
  //   setsearch(ss);
  // };
  // const filteredData = data.filter((e) => {
  //   if (ss === "") {
  //     return e;
  //   } else {
  //     return e.post.toLowerCase().includes(ss);
  //   }
  // });

  const handleclick = (post) => {
    console.log(post);
    axios
      .post(`http://localhost:3000/api/posts/post/${data[0].username}`, {
        name: data[0].username,
        post: post,
        profile_username: data[0].username,
      })
      .then((res) => {
        console.log(res), setrend(!rend);
      });
  };
  const handleadd = (post) => {
    console.log(post);
    axios
      .post(`http://localhost:3000/api/posts/postinfo/${data[0].username}`, {
        name: data[0].username,
        lastname: lastname,
        number: number,
        note: note,
        profile_username: data[0].username,
      })
      .then((res) => {
        console.log(res), setrend(!rend);
      });
  };

  const handledelete = () => {
    axios
      .delete(`http://localhost:3000/api/posts/delete/${data[0].username}`)
      .then((res) => {
        console.log(res);
      });
  };

  axios.get(`http://localhost:3000/api/posts/get`).then((res) => {
    setnewdata(res.data);
  });

  const handleupdate = () => {
    console.log("data", data);
    axios
      .put(`http://localhost:3000/api/posts/put/${data[0].username}`)
      .then((res) => {
        console.log("front", res);
      });
  };

  return (
    <div>
      <header id="header">
        <nav>
          <ul>
            <li class="hea"></li>

            <li class="hea">
              <a href="#">
                <b> Home </b>
              </a>
            </li>

            {/* <li class="hea">
                <button id="darkmode" href="Form.html">
                  <b>dark mode </b>
                </button>
              </li> */}
            {/* </li> */}
            {/* <li class="hea">
              <a href="#box">
                <b>Search </b>
                <input placeholder="search for a user here"></input>
              </a> */}

            {/* <li class="hea">
                <button id="lightmode" href="Form.html">
                  <b>light mode</b>
                </button>
              </li> */}

            {/* { <ul>/*onChange={searchhandler}
                  {filteredData.map((item) => (
                    <li>{item.post}</li>
                  ))} 
                  </ul> */}
            {/* </li> */}

            <li>
              <a href="#">
                <b>profile </b>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="sidebars">
        <div id="lefthome"></div>
        <div id="righthome"></div>
        <div id="leftprofile"></div>
        <div id="rightprofile"></div>
      </div>
      <div className="stories">
        <div id="imagesstories">
          <video
            id="first"
            width="360"
            height="250"
            controls
            loop
            autoplay="autoplay"
          >
            <source
              src="https://player.vimeo.com/external/420239207.sd.mp4?s=2b5a6633c37af1a6fb0beb02c06bdc376fdfcce2&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            ></source>
          </video>

          <video
            id="first"
            width="360"
            height="250"
            controls
            loop
            autoplay="autoplay"
          >
            <source
              src="https://player.vimeo.com/external/420234573.sd.mp4?s=1ee7e9aafcd3fdd3b3675b35f2a8b2f97f342ac8&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            ></source>
          </video>
          <video
            id="first"
            width="360"
            height="250"
            controls
            loop
            autoplay="autoplay"
          >
            <source
              src="https://player.vimeo.com/external/420234383.sd.mp4?s=bbe7a79800aaced5acde961d42af3838a17d4741&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            ></source>
          </video>
          <video
            id="first"
            width="360"
            height="250"
            controls
            loop
            autoplay="autoplay"
          >
            <source
              src="https://player.vimeo.com/external/420235002.sd.mp4?s=5a10491d99173dbd651f6a8b01a498c540809f60&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            ></source>
          </video>
          <video
            id="first"
            width="360"
            height="250"
            controls
            loop
            autoplay="autoplay"
          >
            <source
              src="https://player.vimeo.com/external/420234458.sd.mp4?s=c89ab9318e94a2a96f1ba32e0f59334fa44cc5c6&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            ></source>
          </video>
          <video
            id="first"
            width="360"
            height="250"
            controls
            loop
            autoplay="autoplay"
          >
            <source
              src="https://player.vimeo.com/external/635698877.sd.mp4?s=11be675b4a04a1cb794cc98dd69e7b50d66aa3a6&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            ></source>
          </video>
          <video
            id="first"
            width="360"
            height="250"
            controls
            loop
            autoplay="autoplay"
          >
            <source
              src="https://player.vimeo.com/external/513373860.hd.mp4?s=3aa9a256b9e4eea8b6ed071af5cf6052c3d88c69&profile_id=174&oauth2_token_id=57447761"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div id="containerpost"></div>
        <img
          id="postimg"
          src="https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=360"
        ></img>
        <input
          id="post"
          placeholder="got something to share ?"
          onChange={(e) => {
            setpost(e.target.value);
            console.log(post);
          }}
        ></input>
        <button
          id="share"
          onClick={() => {
            handleclick(post);
          }}
        >
          Share
        </button>
      </div>
      <div id="grid">
        {items.map((e) => {
          return (
            <ul class="allposts">
              <li id="name">{e.name} posted :</li>
              <li id="description">{e.post}</li>
              <button
                id="delete"
                onClick={() => {
                  {
                    handledelete();
                  }
                }}
              >
                delete
              </button>
            </ul>
          );
        })}
      </div>
      <div id="icons">
        <ul id="left">
          <il></il>
          <li>
            friends <img src=""></img>
          </li>
          <li>Gaming</li>
          <li>
            <img></img>Groups
          </li>
          <li>
            <img></img> Events
          </li>
          <li>
            <img></img> Favorites
          </li>
          <li>
            <img></img>Memories
          </li>
          <li>
            <img></img>Pages
          </li>
          <li>Activities</li>
        </ul>
      </div>
      //!Profile Page
      <div id="profile ">
        <button id="editpic">&#128247;</button>
        <button id="editinfo">&#9998; Edit your Profile</button>
        <img
          id="coverphoto"
          src="https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBnaXJsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        ></img>
        <img
          id="profilepic"
          src="https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=360"
        ></img>

        <div className="inpuuts" id="mybio">
          <ul id="infolist">
            <li id="infoname">
              Name : {namee}
              <input
                className="inputs"
                onChange={(e) => {
                  setnamee(e.target.value);
                }}
              ></input>
            </li>
            <li id="infolastname">
              lastname : {lastname}
              <input
                className="inputs"
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
              ></input>
            </li>
            <li id="Note">
              note : {note}
              <input
                className="inputs"
                onChange={(e) => {
                  setnote(e.target.value);
                  console.log(e.target.value);
                }}
              ></input>
            </li>
            <li id="Number">
              number : {number}
              <input
                className="inputs"
                onChange={(e) => {
                  setnumber(e.target.value);
                }}
              ></input>
            </li>

            <li id="birthdate">
              Birth Date : {birthdate}
              <input
                className="inputs"
                onChange={(e) => {
                  setbirthdate(e.target.value);
                }}
              ></input>
            </li>

            <button
              className="inputs"
              onClick={() => {
                handleupdate();
              }}
            >
              submit
            </button>
          </ul>

          <div id="userphotos"></div>
          <div id="profileparams">
            <button id="disconnect">
              <img
                id="icondiscon"
                src="https://static.vecteezy.com/system/resources/thumbnails/006/693/054/small/logout-icon-template-black-color-editable-log-out-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg"
                onClick={() => {
                  setview("Login");
                }}
              ></img>
              Disconnect
            </button>
          </div>
        </div>
        <div id="containerpostuser"></div>
        <img
          id="postimguser"
          src="https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=360"
        ></img>
        <input
          id="postuser"
          placeholder="got something to share ?"
          onChange={(e) => {
            setpost(e.target.value);
            console.log(post);
          }}
        ></input>
        <button
          id="shareuser"
          onClick={(post) => {
            handleupdate(post);
          }}
        >
          Share
        </button>
      </div>
      <div id="griduser">
        {items.map((e) => {
          return (
            <ul class="myallposts">
              <li id="mypostname">{e.name}</li>
              <li id="mypostdescription">{e.post}</li>
              <button
                id="mypostdelete"
                onClick={() => {
                  {
                    handledelete();
                  }
                }}
              >
                delete
              </button>
            </ul>
          );
        })}
      </div>
      <ul id="photoo">
        <li>
          <img
            id="one"
            src="https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=360"
          ></img>
        </li>
        <li>
          <img
            id="two"
            src="https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=360"
          ></img>
        </li>
        <li>
          <img
            id="three"
            src="https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=360"
          ></img>
        </li>
        <li>
          <img
            id="four"
            src="https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=360"
          ></img>
        </li>
      </ul>
    </div>
  );
};

export default HomeandProfile;
