import express from "express";
const router = express.Router();

import {
  authUser,
  deleteUser,
  getUserByID,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controllers/userController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect,admin,getUsers).post(registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect,getUserProfile).put(protect,updateUserProfile);
router.route("/:id").get(protect,admin,getUserByID).delete(protect,admin,deleteUser).put(protect,admin,updateUser);

export default router;
