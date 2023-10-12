const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const constants = require("../../constants");
const { checkAuth } = require("../middlewares/authMiddlewares");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, constants.paths.avatarDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${file.originalname}-${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

router.route("/").get(checkAuth, getUsers);
router.route("/profile/:id").get(checkAuth, getUser);
router
  .route("/profile/:id/update")
  .put(checkAuth, upload.single("avatar"), updateUser);
router.route("/profile/:id/delete").delete(checkAuth, deleteUser);

module.exports = router;
