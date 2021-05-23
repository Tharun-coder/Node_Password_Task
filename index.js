const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const router = require("./userAuth");
require("dotenv").config();
const cors = require("cors");

const app = express();
let port = process.env.PORT || 4000;
const dbUrl = process.env.DB_URL;
app.use(express.json());
app.use(cors());

app.use("/auth", router);

app.listen(port);
