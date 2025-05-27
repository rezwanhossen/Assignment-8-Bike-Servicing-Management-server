import { NextFunction, Request, Response } from "express";
import { serviceRecordServeics } from "./service.service";
import sendResponse from "../../../shared/sendResponce";
import status from "http-status";

const createBikeService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await serviceRecordServeics.createBikeServicer(req.body);
    sendResponse(res, {
      statusCode: status.CREATED,
      success: true,
      message: "Service record created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllServiceRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await serviceRecordServeics.getAllserviceRecord();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Service records fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getServiceRecordById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { serviceId } = req.params;
  try {
    const result = await serviceRecordServeics.getserviceRecordById(serviceId);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Service record fetched by id successfully",
      data: result,
    });
  } catch (err) {
    next;
  }
};
const ServiceRecordComplete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { serviceId } = req.params;
  try {
    const result = await serviceRecordServeics.serviceComplete(
      serviceId,
      req.body
    );
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Service marked as completed",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const serviceRecordControllers = {
  createBikeService,
  getAllServiceRecord,
  getServiceRecordById,
  ServiceRecordComplete,
};
