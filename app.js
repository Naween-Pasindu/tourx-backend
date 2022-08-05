require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
// const userRouter = require("./api/users/user.router");
const loginRouter = require("./api/login/login.router");
const getLeaderBoard = require("./api/tourguide/tourguide.profile.router")
app.use(express.json());

app.use("/api/v1", loginRouter);
app.use("/api/v1",getLeaderBoard);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});