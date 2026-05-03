import { Prisma } from "@prisma/client";

export function handlePrismaError(error, res, defaultMessage) {
    
    if(error instanceof Prisma.PrismaClientKnownRequestError){
        // P2003: Foreign key constraint failed
        if (error.code === 'P2003') {
            const field = error.meta?.field_name || error.meta?.target || 'desconocido';
            return res.status(400).json({
                error: `Error de validación: La entidad relacionada (${field}) no existe o es inválida.`
            });
        }
        
        // P2002: Unique constraint failed
        if (error.code === 'P2002') {
            const field = error.meta?.target || 'desconocido';
            return res.status(400).json({
                error: `Error de unicidad: Ya existe un registro con ese valor (${field}).`
            });
        }

        // P2025: Record to update/delete not found
        if (error.code === 'P2025') {
            return res.status(404).json({
                error: `Registro no encontrado en la base de datos.`
            });
        }
    }

    console.error(error);
    
    return res.status(500).json({
        error: `${defaultMessage}: ${error.message || error}`
    });
}
