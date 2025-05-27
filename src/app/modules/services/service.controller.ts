import { Request, Response } from "express";
import { serviceRecordServeics } from "./service.service";
import sendResponse from "../../../shared/sendResponce";

const createBikeService = async (req: Request, res: Response) => {
  try {
    const result = await serviceRecordServeics.createBikeServicer(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Service record created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message || "Service record created successfully",
      data: err,
    });
  }
};
const getAllServiceRecord = async (req: Request, res: Response) => {
  try {
    const result = await serviceRecordServeics.getAllserviceRecord();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service records fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message || "Service not found",
      data: err,
    });
  }
};
const getServiceRecordById = async (req: Request, res: Response) => {
  const { serviceId } = req.params;
  try {
    const result = await serviceRecordServeics.getAllserviceRecord(serviceId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service record fetched by id successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message || "Service not found",
      data: err,
    });
  }
};
const ServiceRecordComplete = async (req: Request, res: Response) => {
  const { serviceId } = req.params;
  try {
    const result = await serviceRecordServeics.serviceComplete(
      serviceId,
      req.body
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service marked as completed",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message || "Service not found",
      data: err,
    });
  }
};

export const serviceRecordControllers = {
  createBikeService,
  getAllServiceRecord,
  getServiceRecordById,
  ServiceRecordComplete,
};
