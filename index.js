const express=require('express')
const app=express();


app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello world')
})
//const Port=process.env.Port || 5000

app.listen(process.env.Port || 5000,()=>{
    console.log("server start at 5000")
})