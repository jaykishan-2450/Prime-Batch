const mongoose = require("mongoose");
const fs = require("fs");

const data = fs.readFileSync(".env", "utf-8");
mongoose
  .connect(process.env.MONGO_DB_URL, {
    dbName: "PRIME-ABES-22",
  })
  .then(() => {
    console.log("-------DB sconnection successful-------");
  })
  .catch((err) => {
    console.log("--------DB connection error-------");
    console.log(err.message);
    console.log("----------------------------------");
  });
