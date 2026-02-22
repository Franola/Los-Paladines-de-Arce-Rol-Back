import { prisma } from '../../../lib/prisma.ts';

class ClaseDAO {
    constructor(){}

    async get() {
        return await prisma.clase.findMany();
    }

    async getById(id) {
        return await prisma.clase.findUnique({
            where: { id: id }
        });
    }

    async create(claseData) {
        return await prisma.clase.create({
            data: claseData
        });
    }

    async update(id, claseData) {
        return await prisma.clase.update({
            where: { id: id },
            data: claseData
        });
    }

    async delete(id) {
        return await prisma.clase.delete({
            where: { id: id }
        });
    }
}

export const clasesDAO = new ClaseDAO();