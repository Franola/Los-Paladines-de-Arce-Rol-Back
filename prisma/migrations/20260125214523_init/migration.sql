-- CreateTable
CREATE TABLE "Carta" (
    "id" SERIAL NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "claseId" INTEGER NOT NULL,
    "ramaId" INTEGER NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "Carta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notificacion" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "vista" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notificacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NotificacionCartas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_NotificacionCartas_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_NotificacionCartas_B_index" ON "_NotificacionCartas"("B");

-- AddForeignKey
ALTER TABLE "Carta" ADD CONSTRAINT "Carta_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carta" ADD CONSTRAINT "Carta_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carta" ADD CONSTRAINT "Carta_ramaId_fkey" FOREIGN KEY ("ramaId") REFERENCES "Rama"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacion" ADD CONSTRAINT "Notificacion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificacionCartas" ADD CONSTRAINT "_NotificacionCartas_A_fkey" FOREIGN KEY ("A") REFERENCES "Carta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificacionCartas" ADD CONSTRAINT "_NotificacionCartas_B_fkey" FOREIGN KEY ("B") REFERENCES "Notificacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
