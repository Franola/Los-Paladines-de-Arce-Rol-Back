import { prisma } from '../../../lib/prisma.ts';

class PersonajeDAO {
    constructor(){}

    async get() {
        return await prisma.personaje.findMany({
            include: {
                especie: true,
                clase: true,
                rama: true,
                usuario: true
            }
        });
    }

    async getById(id) {
        return await prisma.personaje.findUnique({
            where: { id: id },
            include: {
                especie: true,
                clase: true,
                rama: true,
                usuario: true
            }
        });
    }

    async create(personajeData) {
        return await prisma.personaje.create({
            data: personajeData,
            include: {
                especie: true,
                clase: true,
                rama: true,
                usuario: true
            }
        });
    }

    async update(id, personajeData) {
        return await prisma.personaje.update({
            where: { id: id },
            data: personajeData,
            include: {
                especie: true,
                clase: true,
                rama: true,
                usuario: true
            }
        });
    }

    async delete(id) {
        return await prisma.personaje.delete({
            where: { id: id }
        });
    }
}

export const personajesDAO = new PersonajeDAO();
