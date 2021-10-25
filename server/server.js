const express=require('express');
const path=require('path');
require('dotenv').config();

const app=express();
app.use(express.json())
app.use(express.static(path.resolve('dist')));

app.get('/',(req,res)=>{
  res.sendFile( path.resolve('dist', 'index.html'));
})
app.use((req,res)=>{
  res.sendFile(__dirname+'/error/error404.html')
})

const PORT=process.env.PORT || 7127;

app.listen(PORT,()=>{
  console.log('Server port: ', PORT);
})


