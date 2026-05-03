import { comidasDAO } from "../dao/prisma/comidasDAO.js";

class ComidaRepository{
    #ComidaDAO
    constructor(){
        this.#ComidaDAO = comidasDAO;
    }

    async getComidas() {
        return await this.#ComidaDAO.get();
    }

    async getComidaById(id) {
        return await this.#ComidaDAO.getById(id);
    }

    async createComida(comidaData) {
        return await this.#ComidaDAO.create(comidaData);
    }

    async updateComida(id, comidaData) {
        return await this.#ComidaDAO.update(id, comidaData);
    }

    async deleteComida(id) {
        return await this.#ComidaDAO.delete(id);
    }
}

export const comidaService = new ComidaRepository();
