import { categoriaArmaduraService } from "../repository/CategoriaArmaduraRepository.js";

async function getCategorias(req, res) {
    try{
        const categorias = await categoriaArmaduraService.getCategorias();

        return res.status(200).json(categorias);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener las categorias de armadura" 
        });
    }
}

async function getCategoriaById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const categoria = await categoriaArmaduraService.getCategoriaById(idNumerico);

        if (!categoria) {
            return res.status(404).json({ error: "Categoria de armadura no encontrada" });
        }

        return res.status(200).json(categoria);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la categoria de armadura"
        });
    }
}

async function createCategoria(req, res) {
    try {
        const categoriaData = req.body;
 
        if (!categoriaData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete categoriaData.id;

        const newCategoria = await categoriaArmaduraService.createCategoria(categoriaData);
        
        return res.status(201).json(newCategoria);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear la categoria de armadura: " + error.message
        });
    }
}

async function updateCategoria(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const categoriaData = req.body;

        if (!categoriaData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete categoriaData.id;

        const categoria = await categoriaArmaduraService.getCategoriaById(idNumerico);
        if (!categoria) {
            return res.status(404).json({ error: "Categoria de armadura no encontrada" });
        }

        const updatedCategoria = await categoriaArmaduraService.updateCategoria(idNumerico, categoriaData);

        return res.status(200).json(updatedCategoria);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la categoria de armadura"
        });
    }
}

async function deleteCategoria(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const categoria = await categoriaArmaduraService.getCategoriaById(idNumerico);
        if (!categoria) {
            return res.status(404).json({ error: "Categoria de armadura no encontrada" });
        }

        await categoriaArmaduraService.deleteCategoria(idNumerico);

        return res.status(200).json(categoria);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar la categoria de armadura"
        });
    }
}

export default {
    getCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria
};
