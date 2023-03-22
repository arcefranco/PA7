import { Router } from "express";
import { testConnection } from "../../middlewares/testConnection";
import {
  getMoraDetalle,
  getMoraXSupervisor,
  getMoraXVendedor,
} from "../../controllers/Reportes/Mora/MoraPorVendedorYSup";
require("dotenv").config();

const moraXVendedorYSupRouter = Router();

moraXVendedorYSupRouter.use(testConnection);

moraXVendedorYSupRouter.route("/").post(getMoraXVendedor);
moraXVendedorYSupRouter.route("/sup").post(getMoraXSupervisor);
moraXVendedorYSupRouter.route("/detalle").post(getMoraDetalle);
export default moraXVendedorYSupRouter;
