const express = require("express");
const cors = require('cors');
const app = express();

app.get("/api", (req, res) => {
  res.status(200).send("Hello api");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});