import { armadurasDAO } from "../dao/prisma/armadurasDAO.js";

class ArmaduraRepository{
    #ArmaduraDAO
    constructor(){
        this.#ArmaduraDAO = armadurasDAO;
    }

    async getArmaduras() {
        return await this.#ArmaduraDAO.get();
    }

    async getArmaduraById(id) {
        return await this.#ArmaduraDAO.getById(id);
    }

    async createArmadura(armaduraData) {
        return await this.#ArmaduraDAO.create(armaduraData);
    }

    async updateArmadura(id, armaduraData) {
        return await this.#ArmaduraDAO.update(id, armaduraData);
    }

    async deleteArmadura(id) {
        return await this.#ArmaduraDAO.delete(id);
    }
}

export const armaduraService = new ArmaduraRepository();
