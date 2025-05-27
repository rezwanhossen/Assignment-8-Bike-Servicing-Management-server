import express, { Application, Request, Response } from "express";
import cors from "cors";
import { customerRoute } from "./app/modules/customer/customer.routes";
import { bikeRoutes } from "./app/modules/bike/bike.routes";
import { serviceRecorsRoutes } from "./app/modules/services/service.routes";
import router from "./app/routes";
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
// app.use("/api/customers", customerRoute);
// app.use("/api/bikes", bikeRoutes);
// app.use("/api/services", serviceRecorsRoutes);
export default app;
