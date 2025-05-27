import { NextFunction, Request, Response } from "express";
import status from "http-status";

const globalerrorHandaler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || "sumthing was wrong !",
    error: err,
  });
};

export default globalerrorHandaler;
