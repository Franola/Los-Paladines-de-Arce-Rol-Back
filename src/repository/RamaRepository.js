import { ramasDAO } from "../dao/ramasDAO.js";

class RamaRepository {
    #RamaDAO
    constructor(){
        this.#RamaDAO = ramasDAO;
    }
    
    async getRamas() {
        return await this.#RamaDAO.get();
    }

    async getRamaById(id) {
        return await this.#RamaDAO.getById(id);
    }

    async createRama(ramaData) {
        return await this.#RamaDAO.create(ramaData);
    }

    async updateRama(id, ramaData) {
        return await this.#RamaDAO.update(id, ramaData);
    }

    async deleteRama(id) {
        return await this.#RamaDAO.delete(id);
    }
}

export const ramaService = new RamaRepository();
