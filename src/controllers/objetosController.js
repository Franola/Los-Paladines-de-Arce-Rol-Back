import { objetoService } from "../repository/ObjetoRepository.js";

async function getObjetos(req, res) {
    try{
        const objetos = await objetoService.getObjetos();

        return res.status(200).json(objetos);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener los objetos" 
        });
    }
}

async function getObjetoById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const objeto = await objetoService.getObjetoById(idNumerico);

        if (!objeto) {
            return res.status(404).json({ error: "Objeto no encontrado" });
        }

        return res.status(200).json(objeto);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener el objeto"
        });
    }
}

async function createObjeto(req, res) {
    try {
        const objetoData = req.body;

        if (objetoData.peso !== undefined) objetoData.peso = parseInt(objetoData.peso);

        if (!objetoData.nombre || !objetoData.descripcion || !objetoData.imagen || objetoData.peso < 0) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete objetoData.id;

        const newObjeto = await objetoService.createObjeto(objetoData);
        
        return res.status(201).json(newObjeto);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear el objeto: " + error.message
        });
    }
}

async function updateObjeto(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const objetoData = req.body;

        if (objetoData.peso !== undefined) objetoData.peso = parseInt(objetoData.peso);

        if (!objetoData.nombre || !objetoData.descripcion || !objetoData.imagen || objetoData.peso < 0) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete objetoData.id;

        const objeto = await objetoService.getObjetoById(idNumerico);
        if (!objeto) {
            return res.status(404).json({ error: "Objeto no encontrado" });
        }

        const updatedObjeto = await objetoService.updateObjeto(idNumerico, objetoData);

        return res.status(200).json(updatedObjeto);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar el objeto"
        });
    }
}

async function deleteObjeto(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const objeto = await objetoService.getObjetoById(idNumerico);
        if (!objeto) {
            return res.status(404).json({ error: "Objeto no encontrado" });
        }

        await objetoService.deleteObjeto(idNumerico);

        return res.status(200).json(objeto);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar el objeto"
        });
    }
}

export default {
    getObjetos,
    getObjetoById,
    createObjeto,
    updateObjeto,
    deleteObjeto
};
