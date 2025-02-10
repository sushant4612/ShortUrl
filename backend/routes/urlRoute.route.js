import { Router } from "express";
import { getShortUrl } from "../controllers/url.controller.js";
import verifyLogin from "../middlewares/verifyLogin.middleware.js";

const router = Router();

router.route('/').get(verifyLogin, getShortUrl)

export default router;