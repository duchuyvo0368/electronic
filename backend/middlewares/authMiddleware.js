const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
    }
  } else {
    throw new Error("Lỗi đăng nhập");
  }
});
const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const isAdmin = await User.findOne({ email });
  if (isAdmin.role !== "admin") {
    throw new Error("Bạn không phải admin");
  } else {
    next();
  }
});
module.exports = { authMiddleware, isAdmin };
