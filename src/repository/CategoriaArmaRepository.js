import { categoriasArmaDAO } from "../dao/prisma/categoriasArmaDAO.js";

class CategoriaArmaRepository{
    #CategoriaArmaDAO
    constructor(){
        this.#CategoriaArmaDAO = categoriasArmaDAO;
    }

    async getCategoriasArma() {
        return await this.#CategoriaArmaDAO.get();
    }

    async getCategoriaArmaById(id) {
        return await this.#CategoriaArmaDAO.getById(id);
    }

    async createCategoriaArma(categoriaArmaData) {
        return await this.#CategoriaArmaDAO.create(categoriaArmaData);
    }

    async updateCategoriaArma(id, categoriaArmaData) {
        return await this.#CategoriaArmaDAO.update(id, categoriaArmaData);
    }

    async deleteCategoriaArma(id) {
        return await this.#CategoriaArmaDAO.delete(id);
    }
}

export const categoriaArmaService = new CategoriaArmaRepository();