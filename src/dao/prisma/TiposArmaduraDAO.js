import { prisma } from '../../../lib/prisma.ts';

class TipoArmaduraDAO {
    constructor(){}

    async get() {
        return await prisma.tipoArmadura.findMany();
    }

    async getById(id) {
        return await prisma.tipoArmadura.findUnique({
            where: { id: id }
        });
    }

    async create(tipoArmaduraData) {
        return await prisma.tipoArmadura.create({
            data: tipoArmaduraData
        });
    }

    async update(id, tipoArmaduraData) {
        return await prisma.tipoArmadura.update({
            where: { id: id },
            data: tipoArmaduraData
        });
    }

    async delete(id) {
        return await prisma.tipoArmadura.delete({
            where: { id: id }
        });
    }
}

export const tiposArmaduraDAO = new TipoArmaduraDAO();