const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cors
app.use(cors());

//connect to db
mongoose.connect('mongodb+srv://Akilesh_02:qwerty1234@cluster0-g35ev.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once("open", () => {
  console.log("Connected to database.");
});


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

//serving at 4k
app.listen(4000, () => {
  console.log("Listening to port 4k");
});

