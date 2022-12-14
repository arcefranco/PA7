import { Router } from "express";
import {  getModelos, getModelosById, postModelos, updateModelos,deleteModelos, 
    endCommit, getTipoPlan, endUpdate,getModelosActivos, getCuotas } from "../../controllers/ConfigDatosGenerales/modelosController";
import { testConnection } from "../../middlewares/testConnection";
import authentication from "../../middlewares/authentication";


const ModelosRouter = Router()

ModelosRouter.use(testConnection)

ModelosRouter.route('/').get(getModelos);
// ModelosRouter.route('/cuotas').get(getCuotas);

ModelosRouter.route('/tipoplan').get(getTipoPlan);
// ModelosRouter.route('/activos').get(getModelosActivos);
ModelosRouter.post('/id', authentication, getModelosById)
ModelosRouter.route('/').post(postModelos);
ModelosRouter.route('/').put(updateModelos);
ModelosRouter.route('/').delete(deleteModelos);
ModelosRouter.post('/endUpdate', authentication, endUpdate)

export default ModelosRouter