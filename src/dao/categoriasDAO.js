import { CategoriaModel } from "../models/categoria.model.js"

class CategoriaDAO {
    constructor(){}

    async get() {
        return await CategoriaModel.find().lean();
    }

    async getById(id) {
        return await CategoriaModel.findById(id).lean();
    }

    async create(categoriaData) {
        return await CategoriaModel.create(categoriaData);
    }

    async update(id, categoriaData) {
        return await CategoriaModel.findByIdAndUpdate(id, categoriaData, { new: true });
    }

    async delete(id) {
        return await CategoriaModel.findByIdAndDelete(id);
    }
}

export const categoriasDAO = new CategoriaDAO();