const express = require("express");
const router = express.Router();
const { checkAuth, checkAdmin } = require("../middlewares/authMiddleware");
const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.route("/profile/:id").get(checkAuth, getUser);
router.route("/profile/:id/update").put(checkAuth, updateUser);
router.route("/profile/:id/delete").delete(checkAuth, deleteUser);

module.exports = router;
