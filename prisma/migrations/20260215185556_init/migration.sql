-- CreateTable
CREATE TABLE "Inventario" (
    "id" SERIAL NOT NULL,
    "personajeId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,
    "equipado" BOOLEAN NOT NULL DEFAULT false,
    "armaId" INTEGER,
    "armaduraId" INTEGER,
    "hechizoId" INTEGER,
    "pasivaId" INTEGER,
    "comidaId" INTEGER,
    "objetoId" INTEGER,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_personajeId_fkey" FOREIGN KEY ("personajeId") REFERENCES "Personaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_armaId_fkey" FOREIGN KEY ("armaId") REFERENCES "Arma"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_armaduraId_fkey" FOREIGN KEY ("armaduraId") REFERENCES "Armadura"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_hechizoId_fkey" FOREIGN KEY ("hechizoId") REFERENCES "Hechizo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_pasivaId_fkey" FOREIGN KEY ("pasivaId") REFERENCES "Pasiva"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_comidaId_fkey" FOREIGN KEY ("comidaId") REFERENCES "Comida"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_objetoId_fkey" FOREIGN KEY ("objetoId") REFERENCES "Objeto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
