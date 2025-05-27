import { Request, Response } from "express";
import { bikeServices } from "./bike.service";
import sendResponse from "../../../shared/sendResponce";

const createBike = async (req: Request, res: Response) => {
  try {
    const result = await bikeServices.createBike(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Bike added successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message || "Bike not added successfully",
      data: err,
    });
  }
};
const getAllBike = async (req: Request, res: Response) => {
  try {
    const result = await bikeServices.getALLBike();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Bikes fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message || "Bikes fetched successfully",
      data: err,
    });
  }
};
const getBikeById = async (req: Request, res: Response) => {
  const { bikeId } = req.params;
  try {
    const result = await bikeServices.getBikeByID(bikeId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Bikes fetched by id successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message || "Bike not fetched successfully",
      data: err,
    });
  }
};
export const bikeControllers = {
  createBike,
  getAllBike,
  getBikeById,
};
