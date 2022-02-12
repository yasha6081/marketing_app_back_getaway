const controllers = require("../controllers");
const router = require("express").Router();
//const limiter = require("../config/apiLimiter");
const jwt = require('../_helpers/jwt.js');


router.use(jwt())

router.use("/user/login",controllers.login);


///===Inventory routes

router.use("/inventory/warehouse",controllers.warehouse);



router.use("/", (req, res)=>{
    res.send("Hi from Auth Server!")
})



 module.exports = router;