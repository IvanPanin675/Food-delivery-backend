const { ctrlWrapper } = require("../../helpers");

const current = require("./current");
const findUser = require("./findUser");
const login = require("./login");
const logout = require("./logout");
const patchChanges = require("./patchChanges");
const register = require("./register");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  current: ctrlWrapper(current),
  logout: ctrlWrapper(logout),
  patchChanges: ctrlWrapper(patchChanges),
  updateAvatar: ctrlWrapper(updateAvatar),
  findUser: ctrlWrapper(findUser),
};
