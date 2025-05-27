import { NextFunction, Request, Response } from "express";
import { bikeServices } from "./bike.service";
import sendResponse from "../../../shared/sendResponce";
import status from "http-status";

const createBike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bikeServices.createBike(req.body);
    sendResponse(res, {
      statusCode: status.CREATED,
      success: true,
      message: "Bike added successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllBike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bikeServices.getALLBike();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Bikes fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getBikeById = async (req: Request, res: Response, next: NextFunction) => {
  const { bikeId } = req.params;
  try {
    const result = await bikeServices.getBikeByID(bikeId);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Bikes fetched by id successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const bikeControllers = {
  createBike,
  getAllBike,
  getBikeById,
};
