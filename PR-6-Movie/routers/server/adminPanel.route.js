import { Router } from "express";
import { deshboard } from "../../controllers/server/adminPanel.controller.js";

const adminPanelRouter = Router();

adminPanelRouter.get('/',deshboard);

export default adminPanelRouter;