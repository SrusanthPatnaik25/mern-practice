npm init
npm install expres
npm install nodemon --save-dev //nodemon is a development dependency that automatically restarts the server when file changes are detected
npm run dev









const express = require('express');
const app = express();
const PORT = 2000;
app.use(express.json());

const data =[];

function hello(req,res)  
{
    res.json({"message": "Hello World"}); //This is the response that will be sent to the client when they access the home page
}
function add(req,res)
{
    const a = Number(req.query.a); // This is the first number that will be added
    const b = Number(req.query.b); // This is the second number that will be added
    const sum = a + b;
    res.json({result: sum}); // This is the response that will be sent to the client when they access the add route
}
function volumesphere(req,res)
{
    const r=Number(req.query.r); 
    const volume=(4/3)*Math.PI*(r**3); 
    res.json({Volume_of_sphere: volume});
}
function names(req,res)
{
    const {name}= req.body;
    if (!name) {
        return res.json({error: "Name is Mandatory"});
    }
    data.push(name);
    res.json({message: "Name added successfully",data:data});
}

app.get('/',hello);  // This is the route for the home page
app.get('/add',add); // This is the route for the add page
app.get('/volumesphere',volumesphere); // This is the route for the volume of sphere page
app.post('/name',names); // This is the route for adding names
app.listen(PORT);// This is the port number where the server will listen for requests