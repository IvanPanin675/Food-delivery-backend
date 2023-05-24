const { Product } = require("../../models");

const getProducts = async (req, res) => {
  const { nameShop: owner } = req.query;

  const data = await Product.find({ owner });

  if (!data) {
    throw HttpError(404, "Your not have order");
  }

  res.status(200).json(data);
};

module.exports = getProducts;
