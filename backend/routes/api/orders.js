const express = require("express");
const router = express.Router();
const {
  addToCart,
  getAllOrders,
  updateBookQuantity,
  deleteOrder,
  deleteOrderItem,
} = require("../../controllers/orders");

router.post("/:productId", addToCart);
router.get("/", getAllOrders);
router.patch("/:orderId/orderItems/:orderItemId", updateBookQuantity);
router.delete("/:orderId", deleteOrder);
router.delete("/orderItems/:orderItemId", deleteOrderItem);

module.exports = router;
