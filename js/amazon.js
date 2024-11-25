

const amountOfCart = document.querySelector('.amount');
const elementValue = document.querySelectorAll('.add-button');
let amount;

var ob = {
    amount: amount,
    price: 1
}
if(localStorage.getItem('item-amount')){
    ob = JSON.parse(localStorage.getItem('item-amount'));
    amount = ob.amount;
}
else{
    amount = Number(amountOfCart.innerText);
}

elementValue.forEach(element=>{
    element.addEventListener('click',()=>{
    amount++;
    ob.amount=amount;
    localStorage.setItem('item-amount',JSON.stringify(ob));
    amountOfCart.innerText = JSON.parse(localStorage.getItem('item-amount')).amount;
}) 
})

amountOfCart.innerText = ob.amount;



// const element2 = document.querySelector('.count');
// element2.addEventListener('click',()=>{
//     console.log('clicked');
// })

// const element2 = document.querySelector('.count');
// element2.addEventListener('click', () => {
//     console.log('clicked');
// });