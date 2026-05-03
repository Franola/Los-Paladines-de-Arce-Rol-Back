import { pasivasDAO } from "../dao/prisma/pasivasDAO.js";

class PasivaRepository{
    #PasivaDAO
    constructor(){
        this.#PasivaDAO = pasivasDAO;
    }

    async getPasivas() {
        return await this.#PasivaDAO.get();
    }

    async getPasivaById(id) {
        return await this.#PasivaDAO.getById(id);
    }

    async createPasiva(pasivaData) {
        return await this.#PasivaDAO.create(pasivaData);
    }

    async updatePasiva(id, pasivaData) {
        return await this.#PasivaDAO.update(id, pasivaData);
    }

    async deletePasiva(id) {
        return await this.#PasivaDAO.delete(id);
    }
}

export const pasivaService = new PasivaRepository();
