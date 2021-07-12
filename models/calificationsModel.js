const mongoose = require("mongoose");
const moment = require("moment");
moment.locale("es");

const calificationsSchema = mongoose.Schema({
  professorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  alumno: { type: String },
  materia: { type: String },
  nota: { type: Number },
  descripcion: { type: String },
  asistencias: { type: Number },
  matricula: { type: String },
  eliminada: { type: Boolean, default: false },
  created: {
    type: String,
    default: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
  },
});

module.exports = mongoose.model("calification", calificationsSchema);
