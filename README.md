## Project setup

```bash
$ npm install
$ npx prisma migrate dev

```

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
