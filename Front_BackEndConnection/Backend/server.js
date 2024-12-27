// const express =require('express')

import express from 'express';

const app =express();

app.use(express.static('dist'));

app.get('/',(req,res)=>{
    res.send("<h1>Server is Ready</h1>");
});
// Get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Why don't scientists trust atoms?",
          content: "Because they make up everything!"
        },
        {
          id: 2,
          title: "Why did the scarecrow win an award?", 
          content: "Because he was outstanding in his field!"
        },
        {
          id: 3,
          title: "What do you call a lazy kangaroo?", 
          content: "A pouch potato!"
        },
        {
          id: 4,
          title: "Why don't scientists trust atoms?",
          content: "Because they make up everything!" 
        },
        {
          id: 5,
          title: "Hear about the claustrophobic astronaut?",
          content: "He just needed a little space." 
        }
      ];
      
    res.send(jokes)
})
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is Running on Port number ${port}`)
})