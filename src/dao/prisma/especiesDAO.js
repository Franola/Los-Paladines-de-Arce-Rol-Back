import { prisma } from '../../../lib/prisma.ts';

class EspecieDAO {
    constructor(){}

    async get() {
        return await prisma.especie.findMany();
    }

    async getById(id) {
        return await prisma.especie.findUnique({
            where: { id: id }
        });
    }

    async create(especieData) {
        return await prisma.especie.create({
            data: especieData
        });
    }

    async update(id, especieData) {
        return await prisma.especie.update({
            where: { id: id },
            data: especieData
        });
    }

    async delete(id) {
        return await prisma.especie.delete({
            where: { id: id }
        });
    }
}

export const especiesDAO = new EspecieDAO();