const HttpError  = require("../../Helpers/HttpError");
const { Diskont } = require("../../models");

const getAllDiskonts = async (req, res) => {
  const { myDiskonts } = req.user;
  const data = await Diskont.find({ _id: myDiskonts })
  res.status(200).json(data);
};

const addDiskont = async (req, res) => {
  const data = await Diskont.create({ ...req.body });
  if (!data) {
    throw HttpError(400);
  }
  res.status(201).json(data);
};

const deleteDiskont = async (req, res) => {
  const { id } = req.params;
  const data = await Diskont.findByIdAndDelete(id);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({
    message: `${data.name} deleted`,
  });
};

module.exports = {
  getAllDiskonts,
  addDiskont,
  deleteDiskont,
};
