import { Router } from "express";
import { homePage } from "../controllers/client/index.js";
import adminPanelRouter from "./server/adminPanel.route.js";

const router = Router();

router.use('/server',adminPanelRouter)

export default router;