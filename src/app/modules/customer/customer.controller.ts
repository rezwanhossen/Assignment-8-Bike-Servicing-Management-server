import { NextFunction, Request, RequestHandler, Response } from "express";
import { customersServices } from "./customer.service";
import sendResponse from "../../../shared/sendResponce";
import status from "http-status";

const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await customersServices.creatCustomer(req.body);
    sendResponse(res, {
      statusCode: status.CREATED,
      success: true,
      message: "Customer created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await customersServices.getAllCustomer();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Customer fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getCustomerById: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { customerId } = req.params;
  try {
    const result = await customersServices.getCustomerByID(customerId);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Customer fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const customerUpadteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { customerId } = req.params;
  try {
    const result = await customersServices.customerUpdateById(
      customerId,
      req.body
    );
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Customer updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const customerDeletedById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { customerId } = req.params;
  try {
    const result = await customersServices.customerDeletedByID(customerId);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Customers deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const customerComtrollers = {
  createCustomer,
  getAllCustomer,
  getCustomerById,
  customerUpadteById,
  customerDeletedById,
};
