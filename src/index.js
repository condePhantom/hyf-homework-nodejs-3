const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const data=[];

app.get('/', (request, response) => {
  response.send('Hello World!')
});

app.get('/users',(request,response)=>{
    response.status= 200;
    response.sendStatus=200;
    let aux;
    aux= (data.length==0)?data:data[data.length-1];
    response.send(data);
});

app.get('/user/:id',(request, response)=>{
    response.sendStatus=200;
    response.send({id:0})
});

app.post('/user',function(request,response){
    response.status=200;
	//const id=request.body.id;
    response.send({
        id:0//id
    });
    data.push({id:0})
    
});

app.listen(3000, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${3000}`);
});
