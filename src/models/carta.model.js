import mongoose from 'mongoose';

const cartaSchema = new mongoose.Schema({
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorias' },
    clase: { type: mongoose.Schema.Types.ObjectId, ref: 'Clases' },
    rama: { type: mongoose.Schema.Types.ObjectId, ref: 'Ramas' },
    imagen: { type: String, required: true },
    // usuarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios' }]
})

export const CartaModel = mongoose.model('Cartas', cartaSchema);