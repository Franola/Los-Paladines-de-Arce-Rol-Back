import { especiesDAO } from "../dao/prisma/especiesDAO.js";

class EspecieRepository{
    #EspecieDAO
    constructor(){
        this.#EspecieDAO = especiesDAO;
    }

    async getEspecies() {
        return await this.#EspecieDAO.get();
    }

    async getEspecieById(id) {
        return await this.#EspecieDAO.getById(id);
    }

    async createEspecie(especieData) {
        return await this.#EspecieDAO.create(especieData);
    }

    async updateEspecie(id, especieData) {
        return await this.#EspecieDAO.update(id, especieData);
    }

    async deleteEspecie(id) {
        return await this.#EspecieDAO.delete(id);
    }
}

export const especieService = new EspecieRepository();