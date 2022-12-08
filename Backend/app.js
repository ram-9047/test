const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const port = 8000;

//inport Routes
const searchRoutes = require("./routes/search.js");

app.use(bodyParser.json());
app.use(cors());

app.use(searchRoutes);

app.listen(port, () => {
  console.log(`server is started at ${port}`);
});
