import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
    descripcion: { type: String, required: true }
})

export const CategoriaModel = mongoose.model('Categorias', categoriaSchema);