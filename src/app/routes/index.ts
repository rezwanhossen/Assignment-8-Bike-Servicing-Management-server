import express from "express";
import { customerRoute } from "../modules/customer/customer.routes";
import { bikeRoutes } from "../modules/bike/bike.routes";
import { serviceRecorsRoutes } from "../modules/services/service.routes";
const router = express.Router();
const modulRoutes = [
  {
    path: "/customers",
    route: customerRoute,
  },
  {
    path: "/bikes",
    route: bikeRoutes,
  },
  {
    path: "/services",
    route: serviceRecorsRoutes,
  },
];
modulRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
