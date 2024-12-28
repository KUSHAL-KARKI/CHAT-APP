import express from "express"
import { getUserSidebar } from "../controller/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router()

router.get("/",protectRoute,getUserSidebar)

export default router;