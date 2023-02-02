const router = require("express").Router();
const itemController = require("../controllers/item.controller");

router.get("/get", itemController.selectAll);
router.post("/post/:profile_username", itemController.add);
router.put("/put/:profile_username", itemController.update);
router.delete("/delete/:profile_username", itemController.remove);
router.get("/get/:username/:password", itemController.getOne);
router.post("/postUser", itemController.addUser);
router.post("/postinfo/:profile_username", itemController.addinfo);
module.exports = router;
