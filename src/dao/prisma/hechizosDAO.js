import { prisma } from '../../../lib/prisma.ts';

class HechizoDAO {
    constructor(){}

    async get() {
        return await prisma.hechizo.findMany();
    }

    async getById(id) {
        return await prisma.hechizo.findUnique({
            where: { id: id }
        });
    }

    async create(hechizoData) {
        return await prisma.hechizo.create({
            data: hechizoData
        });
    }

    async update(id, hechizoData) {
        return await prisma.hechizo.update({
            where: { id: id },
            data: hechizoData
        });
    }

    async delete(id) {
        return await prisma.hechizo.delete({
            where: { id: id }
        });
    }
}

export const hechizosDAO = new HechizoDAO();