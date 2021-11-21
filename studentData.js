const mongoose=require("mongoose");
const {Schema}=mongoose;

const studentSchema= new Schema({
    Name: String,
    Regno: String,
    Marks: {
        type: Number,
        min: [0, 'Not Possible'],
        max: 50
      }  
});

module.exports= mongoose.model("studentData", studentSchema, "students");