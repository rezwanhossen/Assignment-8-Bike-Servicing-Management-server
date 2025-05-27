import express from "express";
import { serviceRecordControllers } from "./service.controller";
const router = express.Router();
router.post("/", serviceRecordControllers.createBikeService);
router.get("/", serviceRecordControllers.getAllServiceRecord);
router.get("/:serviceId", serviceRecordControllers.getServiceRecordById);
router.put(
  "/:serviceId/complete",
  serviceRecordControllers.ServiceRecordComplete
);

export const serviceRecorsRoutes = router;
