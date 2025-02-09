import { Router } from "express";
import { getShortUrl } from "../controllers/url.controller.js";

const router = Router();

router.route('/').get(getShortUrl)

export default router;