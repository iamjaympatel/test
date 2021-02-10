//mongo "mongodb+srv://cluster0.urri4.mongodb.net/<dbname>" --username iamjaypatel


const express  = require("express");
const app = express();

const PORT  = process.env.PORT || 5000




//const Port=process.env.Port || 5000

app.use(express.json())


 if(process.env.NODE_ENV === 'production'){
     
     app.get('*',(req,res)=>{
         res.send('hello world')
     })
 }
app.get('/',(req,res)=>{
    res.send("it is by jay patel")
})

app.listen(PORT,()=>{
    console.log("server running on "+ PORT)})


    //mongodb+srv://iamjaypatel:<password>@cluster0.urri4.mongodb.net/<dbname>?retryWrites=true&w=majority
