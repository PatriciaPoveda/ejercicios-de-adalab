const express = require("express");
const cors = require("cors");

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// api endpoints

app.get("/users/:userId/orders/:orderId", (req, res) => {
  console.log(req.params);
  console.log(req.params.userId);
  res.json(req.params);
});
