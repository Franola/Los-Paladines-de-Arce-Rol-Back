import { prisma } from '../../../lib/prisma.ts';

class ComidaDAO {
    constructor(){}

    async get() {
        return await prisma.comida.findMany();
    }

    async getById(id) {
        return await prisma.comida.findUnique({
            where: { id: id }
        });
    }

    async create(comidaData) {
        return await prisma.comida.create({
            data: comidaData
        });
    }

    async update(id, comidaData) {
        return await prisma.comida.update({
            where: { id: id },
            data: comidaData
        });
    }

    async delete(id) {
        return await prisma.comida.delete({
            where: { id: id }
        });
    }
}

export const comidasDAO = new ComidaDAO();
