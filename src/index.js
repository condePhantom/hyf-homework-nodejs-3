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

app.delete('/user/:id',(request,response)=>{
    const id= request.params.id;
    let user="";
    data.forEach((item,i)=>{
        if(item.id==id){
            user=data.splice(i,1);
        }
    });
    response.statusCode=(user.length!=0)?202:204;
    response.send((user.length!=0)?user[0]:[]);
});

app.get('/user/:id',(request, response)=>{
    response.statusCode=200;
    console.log(request.params.id);
    response.send({id:0})
});

app.post('/user',function(request,response){
    response.statusCode=200;
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
