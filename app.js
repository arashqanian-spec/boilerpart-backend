const API="https://boilerpart-backend-production.up.railway.app";

async function login(){
  const username=document.getElementById("username").value;
  const password=document.getElementById("password").value;

  try{
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
      document.getElementById("msg").innerText="ورود موفق";

      setTimeout(()=>{
        window.location.href="admin.html";
      },1000);

    }else{
      document.getElementById("msg").innerText="اطلاعات اشتباه";
    }

  }catch(e){
    document.getElementById("msg").innerText="خطا در اتصال";
  }
}
