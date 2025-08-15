import { PersonajeModel } from "../models/personaje.model.js"

class PersonajeDAO {
    constructor(){}

    async get() {
        return await PersonajeModel.find().populate("clase rama usuario").lean();
    }

    async getById(id) {
        return await PersonajeModel.findById(id).populate("clase rama usuario").lean();
    }

    async create(personajeData) {
        return await PersonajeModel.create(personajeData);
    }

    async update(id, personajeData) {
        return await PersonajeModel.findByIdAndUpdate(id, personajeData, { new: true });
    }

    async delete(id) {
        return await PersonajeModel.findByIdAndDelete(id);
    }
}

export const personajesDAO = new PersonajeDAO();