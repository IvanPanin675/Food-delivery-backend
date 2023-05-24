const { ctrlWrapper } = require("../../helpers");
const { getAllDiskonts, addDiskont, deleteDiskont } = require("./diskonts");

module.exports = {
  getAllDiskonts: ctrlWrapper(getAllDiskonts),
  addDiskont: ctrlWrapper(addDiskont),
  deleteDiskont: ctrlWrapper(deleteDiskont),
};
