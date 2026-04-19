import { hechizosDAO } from "../dao/prisma/hechizosDAO.js";

class HechizoRepository{
    #HechizoDAO
    constructor(){
        this.#HechizoDAO = hechizosDAO;
    }

    async getHechizos() {
        return await this.#HechizoDAO.get();
    }

    async getHechizoById(id) {
        return await this.#HechizoDAO.getById(id);
    }

    async createHechizo(hechizoData) {
        return await this.#HechizoDAO.create(hechizoData);
    }

    async updateHechizo(id, hechizoData) {
        return await this.#HechizoDAO.update(id, hechizoData);
    }

    async deleteHechizo(id) {
        return await this.#HechizoDAO.delete(id);
    }
}

export const hechizoService = new HechizoRepository();