
"use strict";
//document.addEventListener("click", add_product());

function add_product(){
    const product_name = document.querySelector('#product-name').value;
    const price = document.querySelector('#price').value;
    const quantity = document.querySelector('#quantity').value;
    let total =price* quantity;
    document.getElementById('products').innerHTML +=`<tr><td>${product_name}</td><td>${price}</td><td>${quantity}</td><td>${total}</td><td>Remove<t/d></tr>`;
   }





