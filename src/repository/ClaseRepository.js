import { clasesDAO } from "../dao/clasesDAO.js";

class ClaseRepository{
    #ClaseDAO
    constructor(){
        this.#ClaseDAO = clasesDAO;
    }

    async getClases() {
        return await this.#ClaseDAO.get();
    }

    async getClaseById(id) {
        return await this.#ClaseDAO.getById(id);
    }

    async createClase(claseData) {
        return await this.#ClaseDAO.create(claseData);
    }

    async updateClase(id, claseData) {
        return await this.#ClaseDAO.update(id, claseData);
    }

    async deleteClase(id) {
        return await this.#ClaseDAO.delete(id);
    }
}

export const claseService = new ClaseRepository();