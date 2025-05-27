import express, { Application, Request, Response } from "express";
import cors from "cors";
import { customerRoute } from "./app/modules/customer/customer.routes";
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
app.use("/api/customers", customerRoute);
export default app;
