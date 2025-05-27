import { Request, Response } from "express";
import { customersServices } from "./customer.service";
import sendResponse from "../../../shared/sendResponce";

const createCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customersServices.creatCustomer(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Customer created successfully",
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
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Customer fetched successfully",
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
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Customer fetched successfully",
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
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Customer updated successfully",
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
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Customers deleted successfully",
      data: result,
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
