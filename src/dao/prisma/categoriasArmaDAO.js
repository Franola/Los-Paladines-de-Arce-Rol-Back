import { prisma } from '../../../lib/prisma.ts';

class CategoriaArmaDAO {
    constructor(){}

    async get() {
        return await prisma.categoriaArma.findMany();
    }

    async getById(id) {
        return await prisma.categoriaArma.findUnique({
            where: { id: id }
        });
    }

    async create(categoriaArmaData) {
        return await prisma.categoriaArma.create({
            data: categoriaArmaData
        });
    }

    async update(id, categoriaArmaData) {
        return await prisma.categoriaArma.update({
            where: { id: id },
            data: categoriaArmaData
        });
    }

    async delete(id) {
        return await prisma.categoriaArma.delete({
            where: { id: id }
        });
    }
}

export const categoriasArmaDAO = new CategoriaArmaDAO();