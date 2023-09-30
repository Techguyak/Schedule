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

function todolists(){
let todoli = '';
for (let i=0;i<=cart.length-1;i++){ 
    const todolist = cart[i];
    let {name} = todolist;
    let {duedate} = todolist
    console.log(todolist);
    const html = `
    <div>${name}</div>
    <div>${duedate}</div> 
    <button onclick="
    cart.splice(${i},1);
    todolists();
    ">Delete</button>`;
    todoli += html;
}
  console.log(todoli);
  document.querySelector('.panel').
  innerHTML =todoli;
}