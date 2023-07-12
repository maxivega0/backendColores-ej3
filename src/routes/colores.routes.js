import { Router } from "express";
import { borrarColor, crearColor, editarColor, obtenerColorID, obtenerColores } from "../controllers/colores.controller";


const router = Router();

router.route('/colores').get(obtenerColores).post(crearColor);
router.route('/colores/:id')
.get(obtenerColorID)
.delete(borrarColor)
.put(editarColor)


export default router