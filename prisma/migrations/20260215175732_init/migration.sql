/*
  Warnings:

  - Added the required column `imagen` to the `Arma` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagen` to the `Armadura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagen` to the `Comida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagen` to the `Hechizo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagen` to the `Objeto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagen` to the `Pasiva` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagen` to the `Personaje` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Arma" ADD COLUMN     "imagen" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Armadura" ADD COLUMN     "imagen" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comida" ADD COLUMN     "imagen" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Hechizo" ADD COLUMN     "imagen" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Objeto" ADD COLUMN     "imagen" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pasiva" ADD COLUMN     "imagen" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Personaje" ADD COLUMN     "imagen" TEXT NOT NULL;
