import { notificacionesDAO } from "../dao/notificacionesDAO.js";

class NotificacionRepository {
    #NotificacionDAO
    constructor(){
        this.#NotificacionDAO = notificacionesDAO;
    }
    
    async getNotificaciones() {
        return await this.#NotificacionDAO.get();
    }

    async getNotificacionById(id) {
        return await this.#NotificacionDAO.getById(id);
    }

    async getNotificacionByUser(id) {
        return await this.#NotificacionDAO.getByUser(id);
    }

    async createNotificacion(notificacionData) {
        return await this.#NotificacionDAO.create(notificacionData);
    }

    async updateNotificacion(id, notificacionData) {
        return await this.#NotificacionDAO.update(id, notificacionData);
    }

    async deleteNotificacion(id) {
        return await this.#NotificacionDAO.delete(id);
    }
}

export const notificacionService = new NotificacionRepository();
