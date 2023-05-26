// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
const { Order } = require("../../models");
const { HttpError } = require("../../helpers");

const addOrder = async (req, res) => {
  const {
    owner,
    customerName,
    customerLocation,
    shop,
    products,
    customerPhone,
    priceAll,
  } = req.body;
  console.log(req.body)
  const date = new Date();
  const data = await Order.create({
    customerName,
    customerLocation,
    shop,
    products,
    customerPhone,
    priceAll,
    date,
    owner,
  });
  if (!data) {
    throw HttpError(400);
  }
  res.status(201).json(owner);
};

module.exports = addOrder;
