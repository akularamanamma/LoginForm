let {Schema, model} = require("mongoose")
// console.log(mongodb)

let studentSchema = new Schema({
    fn:{
        type:String,
        required:{value:true, message:"Firstname is mandatory"}
    },
    ln:{
        type:String,
        required:{value:true, message:"Lastname is mandatory"}
    },
    age:{
        type:Number,
        required:{value:true}
    },
    number:{
        type:Number,
        required:{value:true, message:"Number is mandatory"}
    },
    email:{
        type:String,
        required:{value:true, message:"Email is mandatory"}
    },
    address:{
        type:String,
        required:{value:true, message:"Address is mandatory"}
    }
}, {timestamps:true})

module.exports = model("student", studentSchema)