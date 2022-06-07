const { Router } = require(`express`);
const authController = require(`../controllers/authcontroller`)
const schema = require(`../model/schema`);

const router = Router()


router.get(`/general`, authController.generalController_get);
router.get(`/register`, authController.registerController_get);
router.post(`/register`, authController.registerController_post);
router.get(`/login`, authController.loginController_post);
router.post(`/login`, authController.loginController_post);
router.get(`/restricted`, authController.restrictedController_get);


module.exports = router;