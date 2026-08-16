require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const products = [
 {
  id:1,
  name:"نمونه قطعه پکیج",
  brand:"Boilerpart",
  price:100000
 }
];

app.get("/",(req,res)=>{
 res.json({
  status:"Boilerpart API is running"
 });
});

app.get("/api/products",(req,res)=>{
 res.json(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
 console.log("API running on "+PORT);
});

app.post('/admin/login', (req,res)=>{
 const {username,password}=req.body;

 if(username==='arash' && password==='arash1373'){
   return res.json({
     success:true,
     token:'boilerpart-admin-token'
   });
 }

 res.status(401).json({
   success:false,
   message:'Invalid credentials'
 });
});
