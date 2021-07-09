const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/userCtrl");

router.post("/user/signup", UserCtrl.signup);
router.post("/user/login", UserCtrl.login);

module.exports = router;
