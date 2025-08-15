import { UsuarioModel } from "../models/usuario.model.js"

class UsuarioDAO {
    constructor(){}

    async get() {
        return await UsuarioModel.find().lean();
    }

    async getById(id) {
        return await UsuarioModel.findById(id).lean();
    }

    async getByUsuario(usuario) {
        return await UsuarioModel.findOne({ usuario }).lean();
    }

    async create(usuarioData) {
        return await UsuarioModel.create(usuarioData);
    }

    async update(id, usuarioData) {
        return await UsuarioModel.findByIdAndUpdate(id, usuarioData, { new: true });
    }

    async delete(id) {
        return await UsuarioModel.findByIdAndDelete(id);
    }
}

export const usuariosDAO = new UsuarioDAO();