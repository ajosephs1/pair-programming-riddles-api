const express = require("express");
const fs = require("node:fs");

const router = express.Router();


router.get("/", (req, res) => {
    let riddles = getRiddles();
    // console.log('working?')
    const filters = req.query
    console.log(filters.difficulty)

    if (filters.difficulty){
        riddles = riddles.filter((riddle)=> riddle.difficulty === filters.difficulty)
    }

    res.json(riddles);
  });



function getRiddles() {
    const riddleFile = fs.readFileSync("./data/riddles.json");
    const riddles = JSON.parse(riddleFile);
    return riddles;
  }

  module.exports = router;