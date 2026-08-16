const API='https://api.boilerpart.ir/api/products';

async function load(){
try{
const r=await fetch(API);
const data=await r.json();
document.getElementById('products-list').innerHTML=data.map(p=>
`<div class="card"><h3>${p.name}</h3><p>${p.price||''}</p></div>`
).join('');
}catch(e){
document.getElementById('products-list').innerHTML='در انتظار اتصال API';
}
}
load();
