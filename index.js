const cart = [];
function add_cart(){
  let inputel= document.querySelector('.plol');
  let name= inputel.value;

  let duedate1 = document.querySelector('.duedate');
  let duedate = duedate1.value;
    cart.push({
      name,
      duedate
    });
  console.log(cart);  
  inputel.value='';
  duedate1.value='';
  
  //    cart.push(duedate2);
  // duedate1.value = '';   
  todolists();
}

document.querySelector('.add-cart').addEventListener('click',()=>{
  add_cart();
})


function todolists(){
let todoli = '';

cart.forEach( (todolist,index) => {
  let {name} = todolist;
  let {duedate} = todolist
  console.log(todolist);
  const html = `
  <div class ="cartname">${name}</div>
  <div class="cartdate">${duedate}</div> 
  <button class="cart-btn del-btn" onclick="
  cart.splice(${index},1);
  todolists();
  ">Delete</button>`;
  todoli += html;
});
  console.log(todoli);
  document.querySelector('.panel').
  innerHTML =todoli;
}
