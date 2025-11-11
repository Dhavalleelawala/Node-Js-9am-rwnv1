import { Router } from "express";
import adminCtl from "../controllers/admin.controller.js"
import userAuth from "../middlewares/userAuth.js";

const adminRouter = Router();

adminRouter.get('/signup',adminCtl.signupPage);
adminRouter.post('/signup',adminCtl.signup);

adminRouter.get('/login',adminCtl.loginPage);
adminRouter.post('/login',adminCtl.login);

adminRouter.get('/',userAuth, adminCtl.dashboard);




export default adminRouter;