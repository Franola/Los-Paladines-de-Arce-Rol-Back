# CREAR BASE DE DATOS
npx prisma migrate dev --name init
npx prisma generate

# GENERAR SCRIPT DE LA BASE DE DATOS
pg_dump -h localhost -p 5432 -d los_paladines -U postgres -s -F p -E UTF-8 -f pg_los_paladines.sql