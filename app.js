const express= require("express");
const mongoose= require("mongoose");
const mySchema= require("./studentData")

const url="mongodb+srv://test:E0AvnyIrr104Vteh@cluster0.o529g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{console.log("Connected to DB")
})
const app=express();

app.use(express.json())

app.post("/new-post",async function(req, res){
    const studentName= req.body.Name;
    const regNo= req.body.Regno;
    const marks=req.body.Marks;

    try {
        
        const newData= new mySchema({
            Name: studentName,
            Regno: regNo,
            Marks: marks 
        });
        const savedData= await newData.save();
        res.json({
            "message": "Data Saved",
            "data": savedData
        })
    } catch (error) {
        res.json(error);
    }

})

app.use("/",  function(req, res){
    res.json({
        "message" : "Express is started"
    })
});

app.listen(3000, function(){
    console.log("Server is up and running");
});