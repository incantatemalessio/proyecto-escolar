const passport = require("passport");

exports.signup = (req, res, next) => {
  if(req.body.invitacion != "MANOAMIGA2011"){
    return res.status(200).json({error: {message: 'El codigo de invitacion es incorrecto'}});
  }

  passport.authenticate("local-signup", (err, user, info) => {
    if (err) {
      return res.status(200).json({ error: err });
    }
    if (info) {
      return res.status(200).json({ error: info }); //unautarized access
    }
    return res
      .status(201)
      .json({ message: "El usuario se creo exitosamente", user: user });
  })(req, res, next);
};

exports.login = (req, res, next) => {
  passport.authenticate("local-login", (err, user, info) => {
    if (err) {
      return res.status(200).json({ error: err });
    }
    if (info) {
      return res.status(200).json({ error: info }); //unautarized access
    }
    return res
      .status(200)
      .json({ message: "El usuario inicio sesion exitosamente", user: user });
  })(req, res, next);
};
