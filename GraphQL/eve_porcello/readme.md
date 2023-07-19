setting up a new GraphQL server with Apollo server

* create new folder (ski-day-counter)
* npm install graphql apollo-server nodemon
* create new file index.js

* updated package.json => "scripts": {"start": "nodemon ."}
* in terminal npm start
* navigate to localhost:4000
* test the query with => query Query {totalDays}

* test in GraphQL sandbox => query Query {totalDays allDays {id date mountain }}
* added enumerate option => conditions

* mutation { addDay(input: {date: "1/2/2025" mountain:"Alpine Meadows" conditions: ICE}){date}}

* customize container/scalar ex "scalar Date" hint: Put on the top to don't forget about custom type

* returning a custom object (RemoveDayPayload)
* mutation {removeDay(id:"132") {day {mountain date}}}

* subscription {newDay{date}}