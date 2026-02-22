import { prisma } from '../../../lib/prisma.ts';

class RamasDAO {
    constructor(){}

    async get() {
        return await prisma.rama.findMany();
    }    

    async getById(id) {
        return await prisma.rama.findUnique({
            where: { id: id }
        });
    }

    async create(RamaData) {
        return await prisma.rama.create({
            data: RamaData
        });
    }

    async update(id, RamaData) {
        return await prisma.rama.update({
            where: { id: id },
            data: RamaData
        });
    }

    async delete(id) {
        return await prisma.rama.delete({
            where: { id: id }
        });
    }
}

export const ramasDAO = new RamasDAO();