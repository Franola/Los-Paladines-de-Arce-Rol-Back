import { prisma } from '../../../lib/prisma.ts';

class CategoriaArmaduraDAO {
    constructor(){}

    async get() {
        return await prisma.categoriaArmadura.findMany();
    }

    async getById(id) {
        return await prisma.categoriaArmadura.findUnique({
            where: { id: id }
        });
    }

    async create(categoriaData) {
        return await prisma.categoriaArmadura.create({
            data: categoriaData
        });
    }

    async update(id, categoriaData) {
        return await prisma.categoriaArmadura.update({
            where: { id: id },
            data: categoriaData
        });
    }

    async delete(id) {
        return await prisma.categoriaArmadura.delete({
            where: { id: id }
        });
    }
}

export const categoriaArmaduraDAO = new CategoriaArmaduraDAO();
