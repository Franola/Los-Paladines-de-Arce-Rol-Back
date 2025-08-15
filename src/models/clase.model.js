import mongoose from 'mongoose';

const claseSchema = new mongoose.Schema({
    descripcion: { type: String, required: true }
})

export const ClaseModel = mongoose.model('Clases', claseSchema);