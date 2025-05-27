import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  jsondata: {
    statusCode: number;
    success: boolean;
    message: string;
    data: T | null | undefined;
  }
) => {
  res.status(jsondata.statusCode).send({
    seccess: jsondata.success,
    message: jsondata.message,
    data: jsondata.data || null || undefined,
  });
};
export default sendResponse;
