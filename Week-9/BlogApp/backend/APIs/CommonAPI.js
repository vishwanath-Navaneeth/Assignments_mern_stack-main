// mini express app
import express from "express";
import { login } from "../services/AuthServices.js";
import { UserModel } from "../models/UserModel.js";
import { compare, hash } from "bcryptjs";
import jwt from "jsonwebtoken";   // ✅ use default import

export const commonRoute = express.Router();

// login route
commonRoute.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let { token, user } = await login(email, password);

  // save the cookie as http only cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.status(200).json({
    message: `${user.role} Logged In Successfully!`,
    payload: user,
  });
});

// logout
commonRoute.get("/logout", async (req, res) => {
  res.clearCookie("token", {
    secure: false,
    sameSite: "lax",
    httpOnly: true,
  });
  res.status(200).json({
    message: `logout successful!`,
  });
});

// change password
commonRoute.put("/change-password", async (req, res) => {
  let { email, oldPassword, newPassword } = req.body;

  let user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "no user with this email" });
  }

  let isMatchPassword = await compare(oldPassword, user.password);
  if (!isMatchPassword) {
    return res.status(401).json({ message: "Sorry wrong password" });
  }

  newPassword = await hash(newPassword, 12);
  let updatedUser = await UserModel.findOneAndUpdate(
    { email },
    { $set: { password: newPassword } },
    { returnDocument: "after", runValidators: true }
  );

  res.status(200).json({
    message: "Password changed successfully",
    payload: updatedUser,
  });
});

// check authentication
import { verifyToken } from "../middlewares/verifyToken.js"; // ✅ bring in your middleware

commonRoute.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), (req, res) => {
  res.status(200).json({
    message: "authenticated",
    payload: req.user,
  });
});
