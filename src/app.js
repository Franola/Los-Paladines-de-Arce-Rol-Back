import express from 'express';
import dotenv from "dotenv";
import clasesRouter from './routes/clases.router.js';
import ramasRouter from './routes/ramas.router.js';
import categoriasArmaRouter from './routes/categoriasArma.router.js';
import especiesRouter from './routes/especies.router.js';
import materialesRouter from './routes/materiales.router.js';
import tiposArmaduraRouter from './routes/tiposArmadura.router.js';
import categoriasRouter from './routes/categorias.router.js';
import usuariosRouter from './routes/usuarios.router.js';
import personajesRouter from './routes/personajes.router.js';
import notificacionesRouter from './routes/notificaciones.router.js';
import cookieParser from "cookie-parser";
import passport from 'passport';
import { iniciarPassport } from "./config/passport.config.js";
import cors from 'cors';

dotenv.config();

const PORT=3000;
const URL_FRONT = process.env.URL_FRONT;

const app=express();

app.use(cors({
    origin: URL_FRONT,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

iniciarPassport()
app.use(passport.initialize())



app.use("/api/clases", clasesRouter);
app.use("/api/ramas", ramasRouter);
app.use("/api/categoriasArma", categoriasArmaRouter);
app.use("/api/especies", especiesRouter);
app.use("/api/materiales", materialesRouter);
app.use("/api/tiposArmadura", tiposArmaduraRouter);
app.use("/api/categorias", categoriasRouter);
app.use("/api/usuarios", usuariosRouter);
app.use("/api/personajes", personajesRouter);
app.use("/api/notificaciones", notificacionesRouter);

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/error", (req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(401).json({error:`Error de autenticación`});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});