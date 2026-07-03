const express = require('express');
const { error } = require('node:console');
const app = express();
const PORT = 2000;
app.use(express.json());

const data =[];

//Create
app.post('/names',(req,res)=>{
    const {name} = req.body;
    if (!name)
    {
        return res.status(400).json({
            error:"Name is required",
        });
    }
    data.push(name);
    res.status(200).json({
        message:"Name added successfully",
        data:data
    });
});

//Read All
app.get('/names',(req,res)=>{
    res.status(200).json({
        message:"Successfully",
        data:data
    });
});

//Read One
app.get('/names/:index',(req,res)=>{   
    const index = Number(req.params.index);
    if (index < 0 || index >= data.length) {
        return res.status(404).json({error: "Name not found"});
    }
    res.status(200).json({
        message:"Successfully",
        data:data[index]
    });
});

//Update
app.put("/names/:index",(req,res)=>{
    const index = Number(req.params.index);
    const {name} = req.body;
    if (index < 0 || index >= data.length) {
        return res.status(404).json({error: "Name not found"});
    }
    data[index]=name;
    res.status(200).json({
        message :"Name is updated successfully",
        data:data
    });
});

//Delete
app.delete("/names:index",(req,res)=>{
    const index = Number(req.params.index);
    if (index < 0 || index >= names.length) {
        return res.status(404).json({
            error: "Name not found."
        });
    }
    const deletedName = names.splice(index, 1); 
    res.status(200).json({
        message: "Name deleted successfully.",
        deleted: deletedName[0],
        data: data
    });
});

app.listen(PORT);// This is the port number where the server will listen for requests