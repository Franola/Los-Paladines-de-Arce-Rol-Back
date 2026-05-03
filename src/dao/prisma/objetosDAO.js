import { prisma } from '../../../lib/prisma.ts';

class ObjetoDAO {
    constructor(){}

    async get() {
        return await prisma.objeto.findMany();
    }

    async getById(id) {
        return await prisma.objeto.findUnique({
            where: { id: id }
        });
    }

    async create(objetoData) {
        return await prisma.objeto.create({
            data: objetoData
        });
    }

    async update(id, objetoData) {
        return await prisma.objeto.update({
            where: { id: id },
            data: objetoData
        });
    }

    async delete(id) {
        return await prisma.objeto.delete({
            where: { id: id }
        });
    }
}

export const objetosDAO = new ObjetoDAO();
