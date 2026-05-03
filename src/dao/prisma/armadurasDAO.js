import { prisma } from '../../../lib/prisma.ts';

class ArmaduraDAO {
    constructor(){}

    async get() {
        return await prisma.armadura.findMany();
    }

    async getById(id) {
        return await prisma.armadura.findUnique({
            where: { id: id }
        });
    }

    async create(armaduraData) {
        return await prisma.armadura.create({
            data: armaduraData
        });
    }

    async update(id, armaduraData) {
        return await prisma.armadura.update({
            where: { id: id },
            data: armaduraData
        });
    }

    async delete(id) {
        return await prisma.armadura.delete({
            where: { id: id }
        });
    }
}

export const armadurasDAO = new ArmaduraDAO();
