import mongoose from 'mongoose';

const ramaSchema = new mongoose.Schema({
    descripcion: { type: String, required: true }
})

export const RamaModel = mongoose.model('Ramas', ramaSchema);