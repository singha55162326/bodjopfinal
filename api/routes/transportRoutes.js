const express = require("express");
const postControllers = require("../controllers/transportControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllTransports)
.post (checkToken,postControllers.createNewTransports);
router.route("/deleteTransports").post(checkToken,postControllers.deleteTransports);
router.route("/updateTransports").post(checkToken,postControllers.updateTransports);
module.exports = router;