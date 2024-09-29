## Project setup

Create the psql database Taxi24 and add the connection string to an .env file in the root directory.
Example:
DATABASE_URL=postgres://{user}:{password}@{hostname}:{port}/{database-name}

Install dependencies and create database tables via prisma migration

```bash
$ npm install
$ npx prisma migrate dev
```

## Insert test data

Run the inserts in the file /insertTestData.sql

## Compile and run the project

```bash
# development
$ npm run start


```

# See table creation statements in:

prisma/migrations/20240923223448*init/migration.sql
prisma/migrations/20240927022243*/migration.sql

# Endpoints

Gets all drivers
GET
/drivers
Example:
curl --location 'http://localhost:3000/drivers'

Gets driver by id
GET
/driver/id
Example:
curl --location 'http://localhost:3000/drivers/2'

Gets the drivers with status available
GET
/drivers/available
Example:
curl --location 'http://localhost:3000/drivers/available'

Gets the 3 nearest drivers to the provided latitude and longitude.
GET
/drivers/nearBy?latitude&longitude
Example:
curl --location 'http://localhost:3000/drivers/nearby?latitude=-10.31371&longitude=46.78011'

Gets all drivers in a 3km radio, receives the latitude and longitude of the center of the circle.
GET
/drivers/inArea?latitude&longitude
Example:
curl --location 'http://localhost:3000/drivers/inArea?latitude=-10.31371&longitude=46.78011'

Registers new ride with Driver and Passenger.
POST
/rides
curl --location 'http://localhost:3000/rides' \
--header 'Content-Type: application/json' \
--data '{
"driverId":3,
"passengerId":4
}'

Updates ride status to completed
PUT
rides/complete/id
curl --location --request PUT 'http://localhost:3000/rides/complete/6'

Gets active rides
GET
/rides/Active
curl --location 'http://localhost:3000/rides/Active'

Gets ride by id
GET
/rides/id
curl --location 'http://localhost:3000/rides/1'

Gets passenger by id
GET
/passengers/id
curl --location 'http://localhost:3000/passengers/1'

Gets all passengers
GET
/passengers
curl --location 'http://localhost:3000/passengers'

#Considerations
Notice that the location of the drivers are not persisted on the database, instead they are simulated in the services getDriversInsideRadio and getNearDrivers. As this data is constanly changing in real time I believe it should be provided by a another service which is out of the scope of the project.
