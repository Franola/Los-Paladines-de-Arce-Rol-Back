import { materialesDAO } from "../dao/prisma/materialesDAO.js";

class MaterialRepository{
    #MaterialesDAO
    constructor(){
        this.#MaterialesDAO = materialesDAO;
    }

    async getMateriales() {
        return await this.#MaterialesDAO.get();
    }

    async getMaterialById(id) {
        return await this.#MaterialesDAO.getById(id);
    }

    async createMaterial(materialData) {
        return await this.#MaterialesDAO.create(materialData);
    }

    async updateMaterial(id, materialData) {
        return await this.#MaterialesDAO.update(id, materialData);
    }

    async deleteMaterial(id) {
        return await this.#MaterialesDAO.delete(id);
    }
}

export const materialService = new MaterialRepository();