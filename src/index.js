const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const data=[];

app.get('/', (request, response) => {
  response.send('Hello World!')
});

app.get('/users',(request,response)=>{
    response.send([]);
});


app.listen(3000, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${3000}`);
});
