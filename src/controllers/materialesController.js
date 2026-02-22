import { materialService } from "../repository/MaterialRepository.js";

async function getMateriales(req, res) {
    try{
        const materiales = await materialService.getMateriales();

        return res.status(200).json(materiales);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener los materiales" 
        });
    }
}

async function getMaterialById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const material = await materialService.getMaterialById(idNumerico);

        if (!material) {
            return res.status(404).json({ error: "Material no encontrado" });
        }

        return res.status(200).json(material);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener el material"
        });
    }
}

async function createMaterial(req, res) {
    try {
        const materialData = req.body;

        if (!materialData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete materialData.id;

        const newMaterial = await materialService.createMaterial(materialData);
        
        return res.status(201).json(newMaterial);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear el material"
        });
    }
}

async function updateMaterial(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const materialData = req.body;

        if (!materialData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete materialData.id;

        const material = await materialService.getMaterialById(idNumerico);
        if (!material) {
            return res.status(404).json({ error: "Material no encontrado" });
        }

        const updatedMaterial = await materialService.updateMaterial(idNumerico, materialData);

        return res.status(200).json(updatedMaterial);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar el material"
        });
    }
}

async function deleteMaterial(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const material = await materialService.getMaterialById(idNumerico);
        if (!material) {
            return res.status(404).json({ error: "Material no encontrado" });
        }

        await materialService.deleteMaterial(idNumerico);

        return res.status(200).json(material);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar el material"
        });
    }
}

export default {
    getMateriales,
    getMaterialById,
    createMaterial,
    updateMaterial,
    deleteMaterial
};