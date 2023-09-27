1. Create a `docker-compose.yml` file
2. write the compose file code
3. run the command `docker compose up`
4. run the command `docker compose up -d` to run the container in background
5. create a prisma project from here : "https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql"
6. run the command `docker ps` to view all the containers
7. run the command `docker exec -it 2cfa543039c5 bash` where 2cfa533030... is the id of the container
8. run the command `su postgres` where postgres is user name
9. run the command `psql` to run the postgresql
10. `\l` to list all the databases
11. `\c [db_name]` to connect to the database, where output = "You are now connected to database "prisma" as user "postgres"."
12. `\d` to check relations/schema in the database
13. run the command `npx prisma migrate dev --name init` to create migrations
14. run the command 