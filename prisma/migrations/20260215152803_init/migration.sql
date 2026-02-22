/*
  Warnings:

  - You are about to drop the column `descripcion` on the `Personaje` table. All the data in the column will be lost.
  - You are about to drop the `Carta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_NotificacionCartas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `carisma` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `constitucion` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destreza` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `especieId` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuerza` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inteligencia` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manaActual` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manaMaxima` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nivel` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sabiduria` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suerte` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tamanio` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `velocidad` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vidaActual` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vidaMaxima` to the `Personaje` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Carta" DROP CONSTRAINT "Carta_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "Carta" DROP CONSTRAINT "Carta_claseId_fkey";

-- DropForeignKey
ALTER TABLE "Carta" DROP CONSTRAINT "Carta_ramaId_fkey";

-- DropForeignKey
ALTER TABLE "_NotificacionCartas" DROP CONSTRAINT "_NotificacionCartas_A_fkey";

-- DropForeignKey
ALTER TABLE "_NotificacionCartas" DROP CONSTRAINT "_NotificacionCartas_B_fkey";

-- AlterTable
ALTER TABLE "Personaje" DROP COLUMN "descripcion",
ADD COLUMN     "carisma" INTEGER NOT NULL,
ADD COLUMN     "constitucion" INTEGER NOT NULL,
ADD COLUMN     "destreza" INTEGER NOT NULL,
ADD COLUMN     "especieId" INTEGER NOT NULL,
ADD COLUMN     "fuerza" INTEGER NOT NULL,
ADD COLUMN     "inteligencia" INTEGER NOT NULL,
ADD COLUMN     "manaActual" INTEGER NOT NULL,
ADD COLUMN     "manaMaxima" INTEGER NOT NULL,
ADD COLUMN     "nivel" INTEGER NOT NULL,
ADD COLUMN     "sabiduria" INTEGER NOT NULL,
ADD COLUMN     "suerte" INTEGER NOT NULL,
ADD COLUMN     "tamanio" INTEGER NOT NULL,
ADD COLUMN     "velocidad" INTEGER NOT NULL,
ADD COLUMN     "vidaActual" INTEGER NOT NULL,
ADD COLUMN     "vidaMaxima" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Carta";

-- DropTable
DROP TABLE "Categoria";

-- DropTable
DROP TABLE "_NotificacionCartas";

-- CreateTable
CREATE TABLE "Especie" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Especie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriaArma" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "CategoriaArma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClasePermiteCategoriaArma" (
    "claseId" INTEGER NOT NULL,
    "categoriaArmaId" INTEGER NOT NULL,

    CONSTRAINT "ClasePermiteCategoriaArma_pkey" PRIMARY KEY ("claseId","categoriaArmaId")
);

-- CreateTable
CREATE TABLE "CategoriaArmadura" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "CategoriaArmadura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoArmadura" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "TipoArmadura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hechizo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "mana" INTEGER NOT NULL,
    "danio" INTEGER NOT NULL,
    "claseId" INTEGER NOT NULL,

    CONSTRAINT "Hechizo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Arma" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "danio" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,
    "categoriaArmaId" INTEGER NOT NULL,
    "materialId" INTEGER NOT NULL,

    CONSTRAINT "Arma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Armadura" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "peso" INTEGER NOT NULL,
    "categoriaArmaduraId" INTEGER NOT NULL,
    "tipoArmaduraId" INTEGER NOT NULL,
    "materialId" INTEGER NOT NULL,

    CONSTRAINT "Armadura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pasiva" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Pasiva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comida" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "peso" INTEGER NOT NULL,

    CONSTRAINT "Comida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objeto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "peso" INTEGER NOT NULL,

    CONSTRAINT "Objeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NotificacionPasivas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_NotificacionPasivas_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_NotificacionHechizos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_NotificacionHechizos_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_NotificacionArmas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_NotificacionArmas_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_NotificacionArmaduras" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_NotificacionArmaduras_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_NotificacionPasivas_B_index" ON "_NotificacionPasivas"("B");

-- CreateIndex
CREATE INDEX "_NotificacionHechizos_B_index" ON "_NotificacionHechizos"("B");

-- CreateIndex
CREATE INDEX "_NotificacionArmas_B_index" ON "_NotificacionArmas"("B");

-- CreateIndex
CREATE INDEX "_NotificacionArmaduras_B_index" ON "_NotificacionArmaduras"("B");

-- AddForeignKey
ALTER TABLE "ClasePermiteCategoriaArma" ADD CONSTRAINT "ClasePermiteCategoriaArma_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClasePermiteCategoriaArma" ADD CONSTRAINT "ClasePermiteCategoriaArma_categoriaArmaId_fkey" FOREIGN KEY ("categoriaArmaId") REFERENCES "CategoriaArma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personaje" ADD CONSTRAINT "Personaje_especieId_fkey" FOREIGN KEY ("especieId") REFERENCES "Especie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hechizo" ADD CONSTRAINT "Hechizo_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arma" ADD CONSTRAINT "Arma_categoriaArmaId_fkey" FOREIGN KEY ("categoriaArmaId") REFERENCES "CategoriaArma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arma" ADD CONSTRAINT "Arma_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Armadura" ADD CONSTRAINT "Armadura_categoriaArmaduraId_fkey" FOREIGN KEY ("categoriaArmaduraId") REFERENCES "CategoriaArmadura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Armadura" ADD CONSTRAINT "Armadura_tipoArmaduraId_fkey" FOREIGN KEY ("tipoArmaduraId") REFERENCES "TipoArmadura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Armadura" ADD CONSTRAINT "Armadura_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificacionPasivas" ADD CONSTRAINT "_NotificacionPasivas_A_fkey" FOREIGN KEY ("A") REFERENCES "Notificacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificacionPasivas" ADD CONSTRAINT "_NotificacionPasivas_B_fkey" FOREIGN KEY ("B") REFERENCES "Pasiva"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificacionHechizos" ADD CONSTRAINT "_NotificacionHechizos_A_fkey" FOREIGN KEY ("A") REFERENCES "Hechizo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificacionHechizos" ADD CONSTRAINT "_NotificacionHechizos_B_fkey" FOREIGN KEY ("B") REFERENCES "Notificacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificacionArmas" ADD CONSTRAINT "_NotificacionArmas_A_fkey" FOREIGN KEY ("A") REFERENCES "Arma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificacionArmas" ADD CONSTRAINT "_NotificacionArmas_B_fkey" FOREIGN KEY ("B") REFERENCES "Notificacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificacionArmaduras" ADD CONSTRAINT "_NotificacionArmaduras_A_fkey" FOREIGN KEY ("A") REFERENCES "Armadura"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificacionArmaduras" ADD CONSTRAINT "_NotificacionArmaduras_B_fkey" FOREIGN KEY ("B") REFERENCES "Notificacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
