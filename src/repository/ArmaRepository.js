import { armasDAO } from "../dao/prisma/armasDAO.js";

class ArmaRepository{
    #ArmaDAO
    constructor(){
        this.#ArmaDAO = armasDAO;
    }

    async getArmas() {
        return await this.#ArmaDAO.get();
    }

    async getArmaById(id) {
        return await this.#ArmaDAO.getById(id);
    }

    async createArma(armaData) {
        return await this.#ArmaDAO.create(armaData);
    }

    async updateArma(id, armaData) {
        return await this.#ArmaDAO.update(id, armaData);
    }

    async deleteArma(id) {
        return await this.#ArmaDAO.delete(id);
    }
}

export const armaService = new ArmaRepository();
