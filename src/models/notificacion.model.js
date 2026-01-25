import mongoose from 'mongoose';

const notificacionSchema = new mongoose.Schema({
    cartas: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cartas'
        }
    ],
    fecha: { type: Date, default: Date.now },
    tipo: { type: String, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios' },
    vista: { type: Boolean, default: false }
})

export const NotificacionModel = mongoose.model('Notificaciones', notificacionSchema);