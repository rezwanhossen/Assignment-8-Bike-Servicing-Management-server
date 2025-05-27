import { Request, Response } from "express";
import { customersServices } from "./customer.service";

const createCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customersServices.creatCustomer(req.body);
    res.status(201).send({
      success: true,
      message: "Customer created successfully!",
      data: result,
    });
  } catch {
    res.status(404).send({
      success: false,
      message: "Customer not created successfully!",
    });
  }
};

const getAllCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customersServices.getAllCustomer();
    res.status(201).send({
      success: true,
      message: "Customers fetched successfully",
      data: result,
    });
  } catch {
    res.status(404).send({
      success: false,
      message: "Customers not fetched successfully!",
    });
  }
};
const getCustomerById = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  try {
    const result = await customersServices.getCustomerByID(customerId);
    res.status(201).send({
      success: true,
      message: "Customers fetched successfully",
      data: result,
    });
  } catch {
    res.status(404).send({
      success: false,
      message: "Customers not fetched successfully!",
    });
  }
};
const customerUpadteById = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  try {
    const result = await customersServices.customerUpdateById(
      customerId,
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Customers update successfully",
      data: result,
    });
  } catch {
    res.status(404).send({
      success: false,
      message: "Customers not update successfully!",
    });
  }
};
const customerDeletedById = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  try {
    const result = await customersServices.customerDeletedByID(customerId);
    res.status(201).send({
      success: true,
      message: "Customers deleted successfully",
    });
  } catch {
    res.status(404).send({
      success: false,
      message: "Customers not deleted successfully!",
    });
  }
};

export const customerComtrollers = {
  createCustomer,
  getAllCustomer,
  getCustomerById,
  customerUpadteById,
  customerDeletedById,
};
