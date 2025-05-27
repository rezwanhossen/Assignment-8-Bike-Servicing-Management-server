"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecorsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.post("/", service_controller_1.serviceRecordControllers.createBikeService);
router.get("/", service_controller_1.serviceRecordControllers.getAllServiceRecord);
router.get("/:serviceId", service_controller_1.serviceRecordControllers.getServiceRecordById);
router.put("/:serviceId/complete", service_controller_1.serviceRecordControllers.ServiceRecordComplete);
exports.serviceRecorsRoutes = router;
