/* {
POST: /api/v1/auth/otps  {email in the body}

} */

const { OtpModel } = require("../../../../models/otp");
const { sendOtpMail } = require("../../../../utils/email-helper");
const bcrypt = require("bcryptjs");

const sendOtpContoller = async (req, res) => {
  try {
    const { email } = req.body;

    //only send otp when there is  not otp sent earlier or it was sent 10 minutes ago
    const otpExist = await OtpModel.find({ email }).sort({ createdAt: -1 }).limit(1);
    if (
      otpExist.length > 0 &&
      otpExist[0].createdAt > Date.now() - 1000 * 60 * 10
    ) {
      return res.status(400).send({
        status: "fail",
        message: `otp already sent minutes ${Math.ceil(
          (Date.now()-otpExist[0].createdAt )/ 1000 / 60
        )} ago`,
      });
    }

    const otp = Math.floor(Math.random() * 9000 + 1000);

    await sendOtpMail({ otp, email });

    const salt = await bcrypt.genSalt(14);
    console.log("salt", salt);
    const hash = await bcrypt.hash(otp + "", salt);
    console.log("hash", hash);

    OtpModel.create({
      email: email,
      otp: hash,
    });

    res.status(201);
    res.json({
      status: "success",
      message: "OTP sent successfully",
    });
  } catch (err) {
    console.log("Error in sendOtpController", err.message);
    res.status(500);
    res.json({
      status: "Fail",
      message: "Internal Server error",
    });
  }
};

module.exports = {
  sendOtpContoller,
};
