import { categoriaArmaService } from "../repository/CategoriaArmaRepository.js";

async function getCategoriasArma(req, res) {
    try{
        const categoriasArma = await categoriaArmaService.getCategoriasArma();

        return res.status(200).json(categoriasArma);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener las categorias de armas" 
        });
    }
}

async function getCategoriaArmaById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const categoriaArma = await categoriaArmaService.getCategoriaArmaById(idNumerico);

        if (!categoriaArma) {
            return res.status(404).json({ error: "Categoria de arma no encontrada" });
        }

        return res.status(200).json(categoriaArma);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la categoria de arma"
        });
    }
}

async function createCategoriaArma(req, res) {
    try {
        const categoriaArmaData = req.body;

        if (!categoriaArmaData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete categoriaArmaData.id;

        const newCategoriaArma = await categoriaArmaService.createCategoriaArma(categoriaArmaData);
        
        return res.status(201).json(newCategoriaArma);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear la categoria de arma"
        });
    }
}

async function updateCategoriaArma(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const categoriaArmaData = req.body;

        if (!categoriaArmaData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete categoriaArmaData.id;

        const categoriaArma = await categoriaArmaService.getCategoriaArmaById(idNumerico);
        if (!categoriaArma) {
            return res.status(404).json({ error: "Categoria de arma no encontrada" });
        }

        const updatedCategoriaArma = await categoriaArmaService.updateCategoriaArma(idNumerico, categoriaArmaData);

        return res.status(200).json(updatedCategoriaArma);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la categoria de arma"
        });
    }
}

async function deleteCategoriaArma(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const categoriaArma = await categoriaArmaService.getCategoriaArmaById(idNumerico);
        if (!categoriaArma) {
            return res.status(404).json({ error: "Categoria de arma no encontrada" });
        }

        await categoriaArmaService.deleteCategoriaArma(idNumerico);

        return res.status(200).json(categoriaArma);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar la categoria de arma"
        });
    }
}

export default {
    getCategoriasArma,
    getCategoriaArmaById,
    createCategoriaArma,
    updateCategoriaArma,
    deleteCategoriaArma
};