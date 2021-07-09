const User = require("../models/userModel");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      User.findOne({ email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, "El usuario con ese correo ya existe"); //400
        }
        if (password.length < 5) {
          return done(null, false, {
            message: "la contraseña debe contener al menos 5 caracteres",
          });
        }

        const newUser = new User();
        newUser.email = req.body.email;
        newUser.password = newUser.encryptPassword(req.body.password);

        newUser.save((err) => {
          return done(null, newUser);
        });
      });
    }
  )
);

passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      User.findOne({ email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: "El usuario con el correo ingresado no se encontro",
          });
        }
        if (password.length < 5) {
          return done(
            null,
            false,
            "La contraseña debe contener al menos 5 caracteres"
          );
        }
        if (!user.checkPassword(req.body.password)) {
          return done(null, false, "La contraseña es incorrecta");
        }

        return done(null, user);
      });
    }
  )
);
