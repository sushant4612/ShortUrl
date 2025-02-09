import { Router } from "express";
import { handleLogin, handleRegister } from "../controllers/user.controller.js";

const router = Router();

router.route('/register').post(handleRegister);
router.route('/login').post(handleLogin);

export default router