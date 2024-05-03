const connectDB = require("../utils/database");
const express = require("express");
const bodyParser = require("body-parser");
const User = require("../models/user");
const cors = require("cors");
const Poem = require("../models/detail");
const app = express();

connectDB();

app.use(bodyParser.json());

const corsOptions = {
  origin: "https://poetic-pulse.vercel.app/",
  methods: "GET,POST,DELETE,PUT",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.post("/api/saveUser", async (req, res) => {
  const { email } = req.body;
  try {
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      await User.create({ email });
      res.status(200).send("User email saved");
    } else {
      console.log("User already exists");
      res.status(200).send("User already exists");
    }
  } catch (err) {
    console.log("Error saving user email", err);
    res.status(500).send("Error saving user");
  }
});

app.post("/api/saveDetail", async (req, res) => {
  const { head, poem, email } = req.body;
  try {
    await Poem.create({ head, poem, email });
    res.status(200).send("Poem Created!");
  } catch (err) {
    console.log("Error creating poem", err);
    res.status(500).send("Error creating poem");
  }
});

app.put("/api/updatePoem", async (req, res) => {
  const { id, detail } = req.body;
  const { head, poem } = detail;
  try {
    await Poem.findByIdAndUpdate(id, { head: head, poem: poem });
    res.status(200).send("Poem Updated");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Updating poem");
  }
});

app.delete("/api/deletePoem", async (req, res) => {
  const id = req.query.id;
  try {
    await Poem.findByIdAndDelete(id);
    res.status(200).send("Poem Deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while Deleting");
  }
});

app.get("/api/getDetail", async (req, res) => {
  try {
    const poems = await Poem.find();
    res.json(poems);
  } catch (err) {
    console.log("Error fetching Poems!", err);
    res.status(500).send("Error fetching Poems!");
  }
});

app.get("/api/getProfile", async (req, res) => {
  try {
    const { email } = req.query;
    const poems = await Poem.find({ email: email });
    res.json(poems);
  } catch (err) {
    console.log("Error while fetching Profile", err);
    res.status(500).send("Error while fetching Profile");
  }
});

app.listen(5000, () => {
  console.log("Server is running on 5000");
});
