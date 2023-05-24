const { Schema, model } = require("mongoose");

const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const orderSchema = new Schema(
  {
    customerName: {
      type: String,
      required: [true, "Set customer name"],
    },
    date: {
      type: String,
      required: true,
    },
    customerLocation: {
      type: String,
      required: true,
    },
    shop: {
      type: String,
    },
    produts: {
      type: Array,
    },
    customerPhone: {
      type: String,
      required: [true, "Set category"],
    },
    owner: {
      type: String,
      ref: "user",
      required: true,
    },
    priceAll: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);
orderSchema.post("save", handleSchemaErrors);


const Order = model("order", orderSchema);

module.exports = Order;
