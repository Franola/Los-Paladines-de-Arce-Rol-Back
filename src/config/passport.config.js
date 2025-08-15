import passport from "passport"
import local from "passport-local"
import passportJWT from "passport-jwt"
import bcrypt from "bcrypt"
import { usuarioService } from "../repository/UsuarioRepository.js"

const buscarToken = req => {
    let token = null

    if (req.cookies.cookieToken) token = req.cookies.cookieToken

    return token
}

export const iniciarPassport = () => {

    passport.use("current",
        new passportJWT.Strategy(
            {
                secretOrKey: "Fciarallo22",
                jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([buscarToken])
            },
            async (contenidoToken, done) => {
                try {
                    
                    return done(null, contenidoToken)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("login",
        new local.Strategy(
            {
                usernameField: "usuario"
            },
            async (username, password, done) => {
                try {
                    console.log("usuario", username);
                    let usuario = await usuarioService.getUsuarioByUsuario(username)
                    if (!usuario) {
                        return done(null, false)
                    }

                    if (!bcrypt.compareSync(password, usuario.password)) { 
                        return done(null, false)
                    }

                    return done(null, usuario)

                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("register",
        new local.Strategy(
            {
                usernameField: "usuario",
                passReqToCallback: true
            },
            async (req, username, password, done) => {
                try {
                    let { rol } = req.body
                    // if (!first_name || !last_name || !age) return done(null, false)
                    
                    let usuario = await usuarioService.getUsuarioByUsuario(username)

                    if (usuario) {
                        return done(null, false)
                    }
                    usuario = {
                        usuario: username,
                        password: bcrypt.hashSync(password, 10),
                        rol: rol || "user"
                    }

                    const newUser = await usuarioService.createUsuario(usuario)

                    return done(null, newUser)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )
}