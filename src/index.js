const express = require('express');
const app = express();


app.get('/', (request, response) => {
  response.send('Hello World!')
});

app.listen(3000, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${3000}`);
});
