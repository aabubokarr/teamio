import express from "express";
import handleCrudController from "../controllers/crud.controller.js"

const router = express.Router();

router.post("/add-crud", handleCrudController);

export default router;
