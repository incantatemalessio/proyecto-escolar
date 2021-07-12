const express = require("express");
const router = express.Router();
const CalificationCtrl = require("../controllers/calificationCtrl");

router.post("/alumno/registrarNota", CalificationCtrl.newCalification);
router.get("/alumno/obtenerCalificacion", CalificationCtrl.getCalification);
router.get("/alumno/obtenerCalificaciones", CalificationCtrl.getCalifications);
router.get("/alumno/obtenerCalificacionesPorProfesor", CalificationCtrl.getCalificationsByProfessor);
router.put("/alumno/actualizarCalificacion", CalificationCtrl.updateCalification);
router.put("/alumno/eliminarCalificacion", CalificationCtrl.deleteCalification);

module.exports = router;
