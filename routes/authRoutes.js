const { Router } = require(`express`);
const authController = require(`../controllers/authcontroller`)
const router = Router()
const {check} = require("../authMiddleware/isLoggedIn")

router.get(`/general`, authController.generalController_get);
router.get(`/register`, authController.registerController_get);
router.get(`/login`, authController.loginController_get);
router.get(`/restricted`, check, authController.restrictedController_get);
router.post(`/register`, authController.registerController_post);
router.post(`/login`, authController.loginController_post);

module.exports = router;