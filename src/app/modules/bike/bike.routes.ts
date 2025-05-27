import express from "express";
import { bikeControllers } from "./bike.controller";

const router = express.Router();
router.post("/", bikeControllers.createBike);
router.get("/", bikeControllers.getAllBike);
router.get("/:bikeId", bikeControllers.getBikeById);

export const bikeRoutes = router;
