import { categoriasDAO } from "../dao/categoriasDAO.js";

class CategoriaRepository {
    #CategoriaDAO
    constructor(){
        this.#CategoriaDAO = categoriasDAO;
    }
    
    async getCategorias() {
        return await this.#CategoriaDAO.get();
    }

    async getCategoriaById(id) {
        return await this.#CategoriaDAO.getById(id);
    }

    async createCategoria(categoriaData) {
        return await this.#CategoriaDAO.create(categoriaData);
    }

    async updateCategoria(id, categoriaData) {
        return await this.#CategoriaDAO.update(id, categoriaData);
    }

    async deleteCategoria(id) {
        return await this.#CategoriaDAO.delete(id);
    }
}

export const categoriaService = new CategoriaRepository();
