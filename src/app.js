import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import clasesRouter from './routes/clases.router.js';
import ramasRouter from './routes/ramas.router.js';
import categoriasRouter from './routes/categorias.router.js';
import usuariosRouter from './routes/usuarios.router.js';
import personajesRouter from './routes/personajes.router.js';
import cookieParser from "cookie-parser";
import passport from 'passport';
import { iniciarPassport } from "./config/passport.config.js";
import cors from 'cors';

const PORT=3000;

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

iniciarPassport()
app.use(passport.initialize())

const URL_MONGO = process.env.MONGO_URI;

mongoose.connect(URL_MONGO, {
    dbName: "los-paladines-de-arce",
}).then(() => {
    console.log("Conectado a la base de datos MongoDB");
}).catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
});

app.use("/api/clases", clasesRouter);
app.use("/api/ramas", ramasRouter);
app.use("/api/categorias", categoriasRouter);
app.use("/api/usuarios", usuariosRouter);
app.use("/api/personajes", personajesRouter);

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