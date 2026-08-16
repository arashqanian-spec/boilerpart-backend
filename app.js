const API="https://boilerpart-backend-production.up.railway.app";

async function login(){
 const username=document.getElementById("username").value;
 const password=document.getElementById("password").value;

 const r=await fetch(API+"/admin/login",{
  method:"POST",
  headers:{
   "Content-Type":"application/json"
  },
  body:JSON.stringify({
   username,
   password
  })
 });

 const data=await r.json();

 if(data.success){
  localStorage.setItem("token",data.token);
  window.location.href="admin.html";
 }
 else{
  document.getElementById("msg").innerText="اطلاعات اشتباه";
 }
}
