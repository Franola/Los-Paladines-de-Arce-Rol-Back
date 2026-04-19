import { categoriaArmaduraDAO } from "../dao/prisma/categoriaArmaduraDAO.js";

class CategoriaArmaduraRepository{
    #CategoriaArmaduraDAO
    constructor(){
        this.#CategoriaArmaduraDAO = categoriaArmaduraDAO;
    }

    async getCategorias() {
        return await this.#CategoriaArmaduraDAO.get();
    }

    async getCategoriaById(id) {
        return await this.#CategoriaArmaduraDAO.getById(id);
    }

    async createCategoria(categoriaData) {
        return await this.#CategoriaArmaduraDAO.create(categoriaData);
    }

    async updateCategoria(id, categoriaData) {
        return await this.#CategoriaArmaduraDAO.update(id, categoriaData);
    }

    async deleteCategoria(id) {
        return await this.#CategoriaArmaduraDAO.delete(id);
    }
}

export const categoriaArmaduraService = new CategoriaArmaduraRepository();
