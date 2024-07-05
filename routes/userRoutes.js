const router = require("express").Router();
const {
  
  createUser,

} = require("../Controller/userCntrl");


router.post("/create", createUser);


module.exports = router;