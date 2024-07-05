const router = require("express").Router();
const {
  
  Refer,

} = require("../Controller/referCntrl");


router.post("/refer", Refer);


module.exports = router;