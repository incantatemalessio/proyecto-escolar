const Calification = require("../models/calificationsModel");

exports.newCalification = (req, res, next) => {
  const newCalification = new Calification();
  newCalification.professorId = req.body.professorId;
  newCalification.alumno = req.body.alumno;
  newCalification.materia = req.body.materia;
  newCalification.nota = req.body.nota;
  newCalification.descripcion = req.body.descripcion;
  newCalification.asistencias = req.body.asistencias;
  newCalification.matricula = req.body.matricula;

  newCalification.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        message: `Error`,
        error: err,
      });
    }
    if (result) {
      return res.status(201).json({
        message: `La calificacion de ${req.body.alumno} se ha registrado exitosamente`,
        calificacion: result,
      });
    }
  });
};

exports.getCalification = (req, res, next) => {
  Calification.findOne({ _id: req.query.id }, function (err, docs) {
    if (err) {
      return res.status(200).json({
        message: "Error",
        error: err,
      });
    }
    if (docs) {
      return res.status(200).json({
        calificacion: docs,
      });
    }
  });
};

exports.getCalificationsByProfessor = (req, res, next) => {
  Calification.find({ professorId: req.query.id, eliminada: { "$ne": true } }, function (err, docs) {
    if (err) {
      return res.status(200).json({
        message: "Error",
        error: err,
      });
    }
    if (docs) {
      return res.status(200).json({
        calificacion: docs,
      });
    }
  }).populate('professorId').sort({ alumno: 1 });
};

exports.getCalifications = (req, res, next) => {
  Calification.find({ eliminada: { "$ne": true } }, function (err, docs) {
    if (err) {
      return res.status(200).json({
        message: "Error",
        error: err,
      });
    }
    if (docs) {
      return res.status(200).json({
        calificacion: docs,
      });
    }
  }).populate('professorId').sort({ alumno: 1 });
};

exports.updateCalification = (req, res, next) => {
  console.log(req.body);
  Calification.findOneAndUpdate(
    { _id: req.body._id }, {
    $set: {
      alumno: req.body.alumno,
      materia: req.body.materia,
      nota: req.body.nota,
      descripcion: req.body.descripcion,
      asistencias: req.body.asistencias,
      matricula: req.body.matricula
    }
  },
    function (err, success) {
      if (err) {
        return res.status(200).json({
          message: "Error",
          error: err,
        });
      }
      if (success) {
        return res.status(200).json({
          message: `El registro ha sido actualizado con exito`,
        });
      }
    }
  );
};

exports.deleteCalification = (req, res, next) => {
  Calification.findOneAndUpdate(
    { _id: req.body._id },
    { $set: { eliminada: true } },
    function (err, doc) {
      if (err) {
        return res.status(200).json({
          message: "Error",
          error: err,
        });
      }
      if (doc) {
        return res.status(200).json({
          message: `El registro ha sido eliminado con exito`,
        });
      }
    }
  );
};
