let express = require("express")
let studentRoutes = require("./routes/student.routes")
let connectDatabase = require("./db/connectDb")
require("dotenv").config();

let app = express()
var cors = require("cors")
app.use(cors())
app.use(express.json())
app.use("/api/student", studentRoutes)

app.use("*", (req, res)=>{
    res.json({error:true, message:"Page Not Found"})
})

app.use((err, req, res, next)=>{
    res.json({error:true, message:err})
})

let startServer = async () => {


    try {
        await connectDatabase(process.env.PORT)
        console.log("MongoDB connected successfully")
        app.listen(4500, ()=>{
            console.log("Server is running at port : http://localhost:4500")
        })

    } catch (error) {
        console.log(error)
    }

}
startServer()