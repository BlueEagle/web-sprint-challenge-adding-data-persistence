const express = require("express");
const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then((dbRes) => res.status(200).json(dbRes).end())
    .catch((error) => res.status(500).json({ error }).end());
});

router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then((dbRes) => res.status(201).json({ newProject: dbRes }).end())
    .catch((error) => res.status(500).json({ error }).end());
});

module.exports = router;
