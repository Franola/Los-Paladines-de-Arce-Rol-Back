import passport from 'passport';

export const loginMiddleware = (req, res, next) => {
    passport.authenticate("login", { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: "Error interno del servidor" });
        }
        if (!user) {
            const message = info && info.message ? info.message : "Credenciales inválidas";
            return res.status(401).json({ error: message });
        }
        req.user = user;
        next();
    })(req, res, next);
};