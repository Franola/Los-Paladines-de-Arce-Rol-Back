import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: String, default: 'user' }
})

export const UsuarioModel = mongoose.model('Usuarios', usuarioSchema);