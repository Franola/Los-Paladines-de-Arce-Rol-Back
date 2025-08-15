import { usuariosDAO } from "../dao/usuariosDAO.js";
import { UserDTO } from "../dto/UserDTO.js";

class UsuarioRepository {
    #UsuarioDAO
    constructor(){
        this.#UsuarioDAO = usuariosDAO;
    }
    
    async getUsuarios() {
        const usuarios = await this.#UsuarioDAO.get();
        return usuarios.map(usuario => new UserDTO(usuario));
    }

    async getUsuarioById(id) {
        const usuario = await this.#UsuarioDAO.getById(id);
        return usuario ? new UserDTO(usuario) : null;
    }

    async getUsuarioByUsuario(usuario) {
        return await this.#UsuarioDAO.getByUsuario(usuario);
    }

    async createUsuario(usuarioData) {
        const newUsuario = await this.#UsuarioDAO.create(usuarioData);
        return new UserDTO(newUsuario);
    }

    async updateUsuario(id, usuarioData) {
        const updatedUsuario = await this.#UsuarioDAO.update(id, usuarioData);
        return updatedUsuario ? new UserDTO(updatedUsuario) : null;
    }

    async deleteUsuario(id) {
        const deletedUsuario = await this.#UsuarioDAO.delete(id);
        return deletedUsuario ? new UserDTO(deletedUsuario) : null;
    }
}

export const usuarioService = new UsuarioRepository();
