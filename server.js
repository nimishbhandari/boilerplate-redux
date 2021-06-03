const express = require("express");
require("dotenv").config();

const app = express();

//init middleware
app.use(express.json());

PORT = process.env.PORT;
MODE = process.env.MODE;
app.listen(PORT, () => {
  console.log(`Server Running in ${MODE} mode on port:${PORT} `);
});
