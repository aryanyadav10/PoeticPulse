const mongoose = require("mongoose");
let isConnected = false;
const fs = require("fs");
const path = require("path");

const envPath = path.resolve(__dirname, ".env");

const envFile = fs.readFileSync(envPath, "utf8");
const envConfig = envFile.split("\n");

envConfig.forEach((line) => {
  const [key, value] = line.split("=");
  process.env[key] = value;
});

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "PoeticPulse",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
