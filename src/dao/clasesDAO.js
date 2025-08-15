import { ClaseModel } from "../models/clase.model.js";

class ClasesDAO {
    constructor(){}

    async get() {
        return await ClaseModel.find().lean();
    }

    async getById(id) {
        return await ClaseModel.findById(id).lean();
    }

    async create(claseData) {
        return await ClaseModel.create(claseData);
    }

    async update(id, claseData) {
        return await ClaseModel.findByIdAndUpdate(id, claseData, { new: true });
    }

    async delete(id) {
        return await ClaseModel.findByIdAndDelete(id);
    }
}

export const clasesDAO = new ClasesDAO();