import { RamaModel } from "../models/rama.model.js"

class RamaDAO {
    constructor(){}

    async get() {
        return await RamaModel.find().lean();
    }

    async getById(id) {
        return await RamaModel.findById(id).lean();
    }

    async create(ramaData) {
        return await RamaModel.create(ramaData);
    }

    async update(id, ramaData) {
        return await RamaModel.findByIdAndUpdate(id, ramaData, { new: true });
    }

    async delete(id) {
        return await RamaModel.findByIdAndDelete(id);
    }
}

export const ramasDAO = new RamaDAO();