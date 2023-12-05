const express = require('express');
const dbConnection = require('./db/db');
const mechanicModel = require('./Model/Mechanic');
const app =  express();

app.use(express.json());


dbConnection().then(()=>console.log("mongodb connected successfully")).catch((error)=>console.log(error))


app.get("/mechanic",async (req,res)=>{
    const getMechanic = await mechanicModel.find();
    res.send(getMechanic)
})


app.post("/mechanic",async (req,res)=>{
    const insert = await mechanicModel.create(req.body);
    res.send(insert)
})


app.listen(3002,()=>{
    console.log('server started successfully http://localhost:3002')
})