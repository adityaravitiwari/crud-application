
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./src/config/db");
const app=require("./src/app");
connectDB();



const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});