const { Schema, model } = require("mongoose");
const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const diskontSchema = new Schema(
  {
    name: {
      type: String,
    },
    diskont: {
      type: Number,
    },
    imgD: {
      type: String,
    }
  },
  { versionKey: false }
);
diskontSchema.post("save", handleSchemaErrors);

const Diskont = model("diskont", diskontSchema);

module.exports = Diskont;
