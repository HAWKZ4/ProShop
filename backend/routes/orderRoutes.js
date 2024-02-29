import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";

import {
  createOrder,
  getUserOrders,
  getOrderById,
  getOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
} from "../controllers/orderController.js";

router.route("/").get(protect, admin, getOrders).post(protect, createOrder);
router.route("/myorders").get(protect, getUserOrders);
router.route("/:id").get(getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(updateOrderToDelivered);

export default router;
