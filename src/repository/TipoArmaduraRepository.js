import { tiposArmaduraDAO } from "../dao/prisma/TiposArmaduraDAO.js";

class TipoArmaduraRepository{
    #TipoArmaduraDAO
    constructor(){
        this.#TipoArmaduraDAO = tiposArmaduraDAO;
    }

    async getTiposArmadura() {
        return await this.#TipoArmaduraDAO.get();
    }

    async getTipoArmaduraById(id) {
        return await this.#TipoArmaduraDAO.getById(id);
    }

    async createTipoArmadura(tipoArmaduraData) {
        return await this.#TipoArmaduraDAO.create(tipoArmaduraData);
    }

    async updateTipoArmadura(id, tipoArmaduraData) {
        return await this.#TipoArmaduraDAO.update(id, tipoArmaduraData);
    }

    async deleteTipoArmadura(id) {
        return await this.#TipoArmaduraDAO.delete(id);
    }
}

export const tipoArmaduraService = new TipoArmaduraRepository();