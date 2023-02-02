// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
// const Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
const selectAll = function (req, res) {
  db.query("SELECT * FROM posts", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

const getOne = function (req, res) {
  db.query(
    "SELECT * FROM user WHERE username=? AND password =?",
    [req.params.username, req.params.password],
    (err, items, field) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    }
  );
};
const addUser = function (req, res) {
  db.query(
    "INSERT INTO user (username , password) VALUES (?,?)",
    [req.body.username, req.body.password],
    (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    }
  );
};
const add = function (req, res) {
  db.query(
    "INSERT INTO posts ( name,profile_username,post) VALUES (?,?,?)",
    [req.body.name, req.params.profile_username, req.body.post],
    (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(req.body.post);
        res.status(200).send(items);
      }
    }
  );
};
const addinfo = function (req, res) {
  db.query(
    "INSERT INTO userinfo ( namee,lastname,number,note,profile_username,post) VALUES (?,?,?;?,5,6)",
    [
      req.body.name,
      req.body.lastname,
      req.body.number,
      req.body.note,
      req.params.profile_username,
    ],
    (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(req.body.post);
        res.status(200).send(items);
      }
    }
  );
};
const update = function (req, res) {
  console.log("here", req.body);
  db.query(
    `UPDATE userinfo SET namee =? , lastname=? , note=? ,profile_username=? WHERE profile_username =?`,
    [
      [req.body.namee],
      [req.body.lastname],
      [req.body.note],
      [req.body.profile_username],
      [req.params.profile_username],
    ],
    (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    }
  );
};
const remove = function (req, res) {
  db.query(
    "DELETE from posts WHERE profile_username =?",
    [req.params.profile_username],
    (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    }
  );
};

module.exports = { selectAll, add, update, remove, getOne, addUser, addinfo };
