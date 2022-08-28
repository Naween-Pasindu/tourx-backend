require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();

const loginRouter = require("./api/login/login.router");
const userRegister = require("./api/register/register.router");
const forgotRouter = require("./api/forgotPassword/forgot.router");
const getLeaderBoard = require("./api/tourguide/tourguide.home.router")
const getYourTours = require('./api/tourguide/tourguide.home.router')
const touristRoutes = require('./api/tourist/tourist.router')
const adminRoutes = require('./api/admin/admin.router')

app.use(cors())
app.use(express.json());

app.use("/api/v1", userRegister);
app.use("/api/v1", loginRouter);
app.use("/api/v1",getLeaderBoard);
app.use("/api/v1",getYourTours);
app.use("/api/v1",forgotRouter);
app.use("/api/v1", touristRoutes);
app.use("/api/v1", adminRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});