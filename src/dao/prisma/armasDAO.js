import { prisma } from '../../../lib/prisma.ts';

class ArmaDAO {
    constructor(){}

    async get() {
        return await prisma.arma.findMany();
    }

    async getById(id) {
        return await prisma.arma.findUnique({
            where: { id: id }
        });
    }

    async create(armaData) {
        return await prisma.arma.create({
            data: armaData
        });
    }

    async update(id, armaData) {
        return await prisma.arma.update({
            where: { id: id },
            data: armaData
        });
    }

    async delete(id) {
        return await prisma.arma.delete({
            where: { id: id }
        });
    }
}

export const armasDAO = new ArmaDAO();
