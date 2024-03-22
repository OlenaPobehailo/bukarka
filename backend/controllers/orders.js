const { ctrlWrapper } = require("../decorators");
const { Order } = require("../models/order");
const { OrderItem } = require("../models/order-item");

const addToCart = async (req, res) => {
  const { productId } = req.params;

  const orderItem = new OrderItem({
    quantity: 1,
    product: productId,
  });

  await orderItem.save();

  let order = await Order.findOne({ status: "Pending" });

  if (!order) {
    order = new Order({ status: "Pending" });
  }

  order.orderItems.push(orderItem);

  await order.save();

  res.status(201).json({
    message: "Книга успішно додана до кошика",
    status: "OK",
    code: 201,
    bookAdded: orderItem,
  });
};

const getAllOrders = async (req, res) => {
  const orderList = await Order.find().populate({
    path: "orderItems",
    populate: { path: "product" },
  });

  const ordersWithTotalPrice = orderList.map((order) => {
    const totalPrice = order.orderItems.reduce((total, orderItem) => {
      const itemTotalPrice = orderItem.quantity * orderItem.product.price;
      return total + itemTotalPrice;
    }, 0);

    return {
      _id: order._id,
      orderItems: order.orderItems,
      status: order.status,
      totalPrice: totalPrice,
    };
  });

  res.status(200).json(ordersWithTotalPrice);
};

const updateBookQuantity = async (req, res) => {
  const { orderId, orderItemId } = req.params;
  const { quantity } = req.body;

  const updatedOrderItem = await OrderItem.findByIdAndUpdate(
    orderItemId,
    { quantity },
    { new: true }
  );

  if (!updatedOrderItem) {
    return res.status(404).send({ message: "Елемент замовлення не знайдено" });
  }

  res.status(200).json(updatedOrderItem);
};

const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  const order = await Order.findByIdAndDelete(orderId);

  if (!order) {
    return res.status(404).json({ message: "Замовлення не знайдено" });
  }

  await OrderItem.deleteMany({ _id: { $in: order.orderItems } });

  res.status(200).json({
    message: "Замовлення та всі елементи замовлення успішно видалені",
  });
};

const deleteOrderItem = async (req, res) => {
  const { orderItemId } = req.params;

  const deletedOrderItem = await OrderItem.findByIdAndDelete(orderItemId);

  if (!deletedOrderItem) {
    return res.status(404).json({ message: "Елемент замовлення не знайдено" });
  }

  res.status(200).json({ message: "Елемент замовлення успішно видалено" });
};

module.exports = {
  addToCart: ctrlWrapper(addToCart),
  getAllOrders: ctrlWrapper(getAllOrders),
  updateBookQuantity: ctrlWrapper(updateBookQuantity),
  deleteOrder: ctrlWrapper(deleteOrder),
  deleteOrderItem: ctrlWrapper(deleteOrderItem),
};
