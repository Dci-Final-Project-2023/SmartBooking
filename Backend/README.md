# Booking-App API Server

Das Backend Projekt für eine Booking-App. Users sollen die Möglichkeit haben sich zu registrieren, einzuloggen und die Möglichkeit haben, Reservierungen in Hotels innerhalb eines bestimmten Datumsbereichs und gemäß den von ihm gewünschten Bedingungen vorzunehmen.

#### Installierte HAUPT Packete

- express
- mongoDB
- mongoose
- cors

### API Endpunkte

#### Hotel

GET http://localhost:5002/api/hotels/:id - Um ein bestimmtes Hotel zu fetchen (ready)

GET http://localhost:5002/api/hotels - Um alle Hotels zu fetchen (ready)

POST http://localhost:5002/api/hotels - Erstelle ein neues Hotel (ready)

PUT http://localhost:5002/api/hotels/:id - Um Daten eines bestimmten Hotels zu ändern (ready)

DELETE http://localhost:5002/api/hotels/:id - Um ein bestimmtes Hotel zu entfernen (ready)


#### User

POST http://localhost:5002/api/user - Erstelle ein neues User (\*\*\*not - ready)

GET http://localhost:5002/api/user/:id - Um ein bestimmtes User zu fetchen (ready)

GET http://localhost:5002/api/user - Um alle Users zu fetchen (ready)

PUT http://localhost:5002/api/user/:id - Um Daten eines bestimmten Users zu ändern (ready)

DELETE http://localhost:5002/api/user/:id - Um ein bestimmtes User zu entfernen (ready)


#### Room
POST http://localhost:5002/api/rooms/:hotelid - Erstelle einen neueen Raum(ready)

PUT http://localhost:5002/api/rooms/:id - Um Daten eines bestimmten Raums zu ändern (ready) 

DELETE http://localhost:5002/api/rooms/:id/:hotelid - Um einen bestimmten Raum zu entfernen (ready)

GET http://localhost:5002/api/rooms/:id - Um einen bestimmeten Raum zu fetchen (ready)

GET http://localhost:5002/api/rooms - Um alle Räume zu fetchen (ready)




### Daten Schema:

#### User:

```js
"username": "Max",
"email": "max@muster.com",
"password": "String",
"isAdmin": true,
```

#### Hotel:

```js
"name": "Hotel Luxury",
"type": "Butik",
"city": "Belin",
"address": "Vulkanstraße 20, 10367 Berlin",
"distance":"30",
"photos" : ["photoUrl","photoUrl"]
"title" : "",
"desc": "",
"rating" : 5,
"rooms" : ["1","2","3","4","5"],
"cheapestPrice" : 100,
"featured" : true
```

#### Room:

```js
"title": "Extra Lüx",
"price" : 200,
"desc" : "",
"maxPeople" : 2
"roomNumbers" : [{number :1 , unavailable : ["01.01.2023"],["06.01.2023"],["15.01.2023"]},{number :2 , unavailable : ["02.01.2023"],["03.01.2023"]}]
```

### TODOS
- [X]room routes create
- [X]room contollers create
- [X]user create
- [X]authentication
- [X]authorization
- [X]jwt test
- [X]all routes testen

- [ ] in room controllers error handling
- [ ] update room control (array error)
- [ ] pull method for delete room
