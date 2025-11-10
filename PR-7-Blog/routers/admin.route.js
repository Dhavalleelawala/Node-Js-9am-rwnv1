import { Router } from "express";
import adminCtl from "../controllers/admin.controller.js"

const adminRouter = Router();

adminRouter.get('/signup',adminCtl.signupPage);
adminRouter.post('/signup',adminCtl.signup);

adminRouter.get('/',adminCtl.dashboard)




export default adminRouter;