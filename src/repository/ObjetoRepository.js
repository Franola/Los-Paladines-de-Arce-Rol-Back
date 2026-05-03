import { objetosDAO } from "../dao/prisma/objetosDAO.js";

class ObjetoRepository{
    #ObjetoDAO
    constructor(){
        this.#ObjetoDAO = objetosDAO;
    }

    async getObjetos() {
        return await this.#ObjetoDAO.get();
    }

    async getObjetoById(id) {
        return await this.#ObjetoDAO.getById(id);
    }

    async createObjeto(objetoData) {
        return await this.#ObjetoDAO.create(objetoData);
    }

    async updateObjeto(id, objetoData) {
        return await this.#ObjetoDAO.update(id, objetoData);
    }

    async deleteObjeto(id) {
        return await this.#ObjetoDAO.delete(id);
    }
}

export const objetoService = new ObjetoRepository();
