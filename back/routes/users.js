const express = require("express");
const router = express.Router();
const { validateUser } = require("../middlewares/validateUser");
const {
  login_user,
  logout_user,
  signup_user,
  update_user_data,
} = require("../controllers/userController");

router.post("/signup", signup_user);

router.post("/login", login_user);

router.put("/:nickname", update_user_data);

router.get("/logout", logout_user);

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

module.exports = router;
