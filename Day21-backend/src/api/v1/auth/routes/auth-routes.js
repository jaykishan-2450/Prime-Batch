const express = require("express");
const { sendOtpContoller } = require("../controllers/send-otp-controller");

const  authRouter = express.Router();

authRouter.post("/otps", sendOtpContoller);

module.exports = {
    authRouter,
}