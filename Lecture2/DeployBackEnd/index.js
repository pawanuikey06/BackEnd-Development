require('dotenv').config()
const express =require('express')

const app=express()
const port =3000

app.get('/',(req,res)=>{
    res.send("hello Wordl !")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listning on port ${process.env.PORT}`)
})