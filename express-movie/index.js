const express=require("express");
const app=express();
const fs = require('fs');
const router=express.Router();
const PORT=process.env.PORT || 3000;
const db=require("./db.json");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.listen(PORT,()=>
{
	console.log("Port number",PORT);
});


router.use(function(request, response, next) {
    
 response.header("Access-Control-Allow-Origin", "*");
 response.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.route('/')


	.get((request, response) => {
    fs.readFile('db.json', 'utf-8', (err, data) => {
      if (err) throw err;
      response.send(JSON.parse(data));
    });
  })
	.post((request, response) => {
    db.push(request.body);
    fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
      if (err) throw err;
      response.send('Added to json');
    });

  })

router.route('/:id')


	.delete((request, response) => {
    db.forEach((data, index) => {
      if (data.id == request.params.id) {
        db.splice(index, 1);
      }
    });
    fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
    	 if (err) throw err;
    	fs.readFile('db.json','utf-8',(err,data)=>{
    	if (err) throw err;
     
      response.send(JSON.parse(data));
    });
    });
  })

	.put((request, response) => {
    db.forEach((data, index) => {
      if (data.id == request.params.id) {
        db.splice(index, 1,request.body);
      }
      });
      fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
      if (err) throw err;
      response.send('Bear deleted!');
    });
    })


app.use('/',router);
