import { Router } from "express";
import { handleLogin, handleLogout, handleRegister } from "../controllers/user.controller.js";

const router = Router();

router.route('/register').post(handleRegister);
router.route('/login').post(handleLogin);
router.route('/logout').post(handleLogout);

export default router