const express = require("express");
const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.get()
    .then((dbRes) => res.status(200).json(dbRes).end())
    .catch((error) => res.status(500).json({ error }).end());
});

router.post("/", (req, res) => {
  Tasks.insert(req.body)
    .then((dbRes) => res.status(201).json({ newTask: dbRes }).end())
    .catch((error) => res.status(500).json({ error }).end());
});

module.exports = router;
