const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));

if (app.get("env") === "development") {
  console.log("Morgan enabled...");
}

const port = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Listening on port ${port}...`));
