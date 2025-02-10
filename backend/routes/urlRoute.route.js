import { Router } from "express";
import { getShortUrl, listUrl } from "../controllers/url.controller.js";
import verifyLogin from "../middlewares/verifyLogin.middleware.js";

const router = Router();

router.route('/').get(verifyLogin, getShortUrl)
router.route('/list').get(verifyLogin, listUrl)

export default router;