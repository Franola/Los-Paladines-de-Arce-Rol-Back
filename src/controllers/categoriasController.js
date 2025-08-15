import { categoriaService } from "../repository/CategoriaRepository.js";

async function getCategorias(req, res) {
    try{
        const categorias = await categoriaService.getCategorias();

        return res.status(200).json(categorias);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener las categorias" 
        });
    }
}

async function getCategoriaById(req, res) {
    try {
        const { id } = req.params;
        const categoria = await categoriaService.getCategoriaById(id);

        if (!categoria) {
            return res.status(404).json({ error: "Categoria no encontrada" });
        }

        return res.status(200).json(categoria);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la categoria"
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

        const newCategoria = await categoriaService.createCategoria(categoriaData);
        
        return res.status(201).json(newCategoria);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear la categoria"
        });
    }
}

async function updateCategoria(req, res) {
    try {
        const { id } = req.params;
        const categoriaData = req.body;

        if (!categoriaData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        const categoria = await categoriaService.getCategoriaById(id);
        if (!categoria) {
            return res.status(404).json({ error: "Categoria no encontrada" });
        }

        const updatedCategoria = await categoriaService.updateCategoria(id, categoriaData);

        return res.status(200).json(updatedCategoria);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la categoria"
        });
    }
}

async function deleteCategoria(req, res) {
    try {
        const { id } = req.params;

        const categoria = await categoriaService.getCategoriaById(id);
        if (!categoria) {
            return res.status(404).json({ error: "Categoria no encontrada" });
        }

        await categoriaService.deleteCategoria(id);

        return res.status(200).json(categoria);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar la categoria"
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