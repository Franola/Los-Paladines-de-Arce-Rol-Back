import { prisma } from '../../../lib/prisma.ts';

class MaterialDAO {
    constructor(){}

    async get() {
        return await prisma.material.findMany();
    }

    async getById(id) {
        return await prisma.material.findUnique({
            where: { id: id }
        });
    }

    async create(materialData) {
        return await prisma.material.create({
            data: materialData
        });
    }

    async update(id, materialData) {
        return await prisma.material.update({
            where: { id: id },
            data: materialData
        });
    }

    async delete(id) {
        return await prisma.material.delete({
            where: { id: id }
        });
    }
}

export const materialesDAO = new MaterialDAO();