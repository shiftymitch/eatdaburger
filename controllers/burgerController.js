//! require express & import burger-model
const express = require("express");
const burger = require("../models/burger-model.js");

//! router setup
const router = express.Router();

//! get all burgers at root
router.get("/", (req, res) => {
  burger.all(data => {
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

//! add new burgers
router.post("/api/burgers", (req, res) => {
  burger.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], result => {
    res.json({ id: result.insertId });
  });
});

//! update burger eaten status
router.put("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.update({
    eaten: req.body.eaten
  }, condition, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//! delete burgers
router.delete("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.delete(condition, result => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;