import express from "express";
import { customerComtrollers } from "./customer.controller";
const router = express.Router();

router.post("/", customerComtrollers.createCustomer);
router.get("/", customerComtrollers.getAllCustomer);
router.get("/:customerId", customerComtrollers.getCustomerById);
router.put("/:customerId", customerComtrollers.customerUpadteById);
router.delete("/:customerId", customerComtrollers.customerDeletedById);
export const customerRoute = router;
