"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoute = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post("/", customer_controller_1.customerComtrollers.createCustomer);
router.get("/", customer_controller_1.customerComtrollers.getAllCustomer);
router.get("/:customerId", customer_controller_1.customerComtrollers.getCustomerById);
router.put("/:customerId", customer_controller_1.customerComtrollers.customerUpadteById);
router.delete("/:customerId", customer_controller_1.customerComtrollers.customerDeletedById);
exports.customerRoute = router;
