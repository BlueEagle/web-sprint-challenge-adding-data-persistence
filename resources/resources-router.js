const express = require("express");
const Resources = require("./resources-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.get()
    .then((dbRes) => res.status(200).json(dbRes).end())
    .catch((error) => res.status(500).json({ error }).end());
});

router.post("/", (req, res) => {
  Resources.insert(req.body)
    .then((dbRes) => res.status(201).json({ newResource: dbRes }).end())
    .catch((error) => res.status(500).json({ error }).end());
});

module.exports = router;
