const express=require('express')
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const authRoute=require("./routes/auth")
dotenv.config()
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
}).then(console.log("connected to mongoose")).catch((err)=>console.log(err));

console.log("zeel")

app.use("/",(req,res)=>{
    console.log("Hey this is main url")
})

app.use("/api/auth",authRoute);
app.listen("5000",()=>{
    console.log("backend is running");
});