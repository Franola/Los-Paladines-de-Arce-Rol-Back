import mongoose from 'mongoose';

const personajeSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    clase: { type: mongoose.Schema.Types.ObjectId, ref: 'Clases' },
    rama: { type: mongoose.Schema.Types.ObjectId, ref: 'Ramas' },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios' }
})

export const PersonajeModel = mongoose.model('Personajes', personajeSchema);