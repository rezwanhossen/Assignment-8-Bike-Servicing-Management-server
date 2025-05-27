import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "./app/routes";
import globalerrorHandaler from "./app/middlewair/globarErrorHandel";
import status from "http-status";
const app: Application = express();
app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Bike Servicing Management server",
  });
});
app.use("/api", router);
app.use(globalerrorHandaler);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "data not Found In Data Base",
    error: {
      path: req.originalUrl,
      message: "Your requst path is nit found !",
    },
  });
});

export default app;
