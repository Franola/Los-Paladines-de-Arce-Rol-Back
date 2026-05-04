import { comidaService } from "../repository/ComidaRepository.js";

async function getComidas(req, res) {
    try{
        const comidas = await comidaService.getComidas();

        return res.status(200).json(comidas);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener las comidas" 
        });
    }
}

async function getComidaById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const comida = await comidaService.getComidaById(idNumerico);

        if (!comida) {
            return res.status(404).json({ error: "Comida no encontrada" });
        }

        return res.status(200).json(comida);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la comida"
        });
    }
}

async function createComida(req, res) {
    try {
        const comidaData = req.body;

        if (comidaData.peso !== undefined) comidaData.peso = parseInt(comidaData.peso);

        if (!comidaData.nombre  || !comidaData.imagen || comidaData.peso < 0) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete comidaData.id;

        const newComida = await comidaService.createComida(comidaData);
        
        return res.status(201).json(newComida);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear la comida: " + error.message
        });
    }
}

async function updateComida(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const comidaData = req.body;

        if (comidaData.peso !== undefined) comidaData.peso = parseInt(comidaData.peso);

        if (!comidaData.nombre  || !comidaData.imagen || comidaData.peso < 0) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete comidaData.id;

        const comida = await comidaService.getComidaById(idNumerico);
        if (!comida) {
            return res.status(404).json({ error: "Comida no encontrada" });
        }

        const updatedComida = await comidaService.updateComida(idNumerico, comidaData);

        return res.status(200).json(updatedComida);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la comida"
        });
    }
}

async function deleteComida(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const comida = await comidaService.getComidaById(idNumerico);
        if (!comida) {
            return res.status(404).json({ error: "Comida no encontrada" });
        }

        await comidaService.deleteComida(idNumerico);

        return res.status(200).json(comida);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar la comida"
        });
    }
}

export default {
    getComidas,
    getComidaById,
    createComida,
    updateComida,
    deleteComida
};
