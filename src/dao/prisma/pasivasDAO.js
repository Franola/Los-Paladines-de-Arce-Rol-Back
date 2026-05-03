import { prisma } from '../../../lib/prisma.ts';

class PasivaDAO {
    constructor(){}

    async get() {
        return await prisma.pasiva.findMany();
    }

    async getById(id) {
        return await prisma.pasiva.findUnique({
            where: { id: id }
        });
    }

    async create(pasivaData) {
        return await prisma.pasiva.create({
            data: pasivaData
        });
    }

    async update(id, pasivaData) {
        return await prisma.pasiva.update({
            where: { id: id },
            data: pasivaData
        });
    }

    async delete(id) {
        return await prisma.pasiva.delete({
            where: { id: id }
        });
    }
}

export const pasivasDAO = new PasivaDAO();
