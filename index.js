const cart = [];
function add_cart(){
   
    let inputel= document.querySelector('.plol');
    let inpelement= inputel.value;
     cart.push(inpelement);
    console.log(cart);  
    inputel.value='';
    todolists();
}


  function todolists(){
    
  let todoli = '';

  for (let i=0;i<=cart.length-1;i++){
     const todolist = cart[i];
     console.log(todolist);
     const html = `<p>${todolist}</p>`;
     todoli += html;
  }
    console.log(todoli);
    document.querySelector('.panel').
    innerHTML =todoli;
  }