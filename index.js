const express=require('express')
const app=express();


app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello world')
})
const Port=process.env.Port

app.listen(Port,()=>{
    console.log("server start at 5000")
})