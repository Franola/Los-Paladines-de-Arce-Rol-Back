import { prisma } from '../../../lib/prisma.ts';

class UsuarioDAO {
    constructor(){}

    async get() {
        return await prisma.usuario.findMany();
    }

    async getById(id) {
        return await prisma.usuario.findUnique({
            where: { id: id }
        });
    }
    
    async getByUsuario(usuario) {
        return await prisma.usuario.findMany({
            where: { usuario: usuario },
            take: 1
        }).then(result => result[0] || null);
    }

    async create(usuarioData) {
        return await prisma.usuario.create({
            data: usuarioData
        });
    }

    async update(id, usuarioData) {
        return await prisma.usuario.update({
            where: { id: id },
            data: usuarioData
        });
    }

    async delete(id) {
        return await prisma.usuario.delete({
            where: { id: id }
        });
    }
}

export const usuarioDAO = new UsuarioDAO();