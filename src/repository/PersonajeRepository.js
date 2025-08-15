import { personajesDAO } from "../dao/personajesDAO.js";
import { UserDTO } from "../dto/UserDTO.js";

class PersonajeRepository {
    #PersonajeDAO
    constructor(){
        this.#PersonajeDAO = personajesDAO;
    }
    
    async getPersonajes() {
        let personajes = await this.#PersonajeDAO.get();
        personajes = personajes.map(p => {
            p.usuario = new UserDTO(p.usuario);
            return p;
        });
        return personajes;
    }

    async getPersonajeById(id) {
        let personaje = await this.#PersonajeDAO.getById(id);
        if (personaje) {
            personaje.usuario = new UserDTO(personaje.usuario);
        }
        return personaje;
    }

    async createPersonaje(personajeData) {
        return await this.#PersonajeDAO.create(personajeData);
    }

    async updatePersonaje(id, personajeData) {
        let personaje = await this.#PersonajeDAO.update(id, personajeData);
        return personaje;
    }

    async deletePersonaje(id) {
        
        return await this.#PersonajeDAO.delete(id);
    }
}

export const personajeService = new PersonajeRepository();
