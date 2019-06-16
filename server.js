const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`You're listening on port ${PORT}...`);
});