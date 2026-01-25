import { NotificacionModel } from "../models/notificacion.model.js"

class NotificacionDAO {
    constructor(){}

    async get() {
        return await NotificacionModel.find().populate("cartas.carta").lean();
    }

    async getById(id) {
        return await NotificacionModel.findById(id).populate("cartas.carta").lean();
    }

    async getByUser(id) {
        return await NotificacionModel.find({ usuario: id }).populate("cartas").lean();
    }

    async create(notificacionData) {
        return await NotificacionModel.create(notificacionData);
    }

    async update(id, notificacionData) {
        return await NotificacionModel.findByIdAndUpdate(id, notificacionData, { new: true });
    }

    async delete(id) {
        return await NotificacionModel.findByIdAndDelete(id);
    }
}

export const notificacionesDAO = new NotificacionDAO();