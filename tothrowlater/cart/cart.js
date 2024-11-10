function updateTotal() 
{
  const qty1 = document.getElementById("qty1").value;
  const qty2 = document.getElementById("qty2").value;

  const price1 = 1;//maybe need to connect to data base
  const price2 = 1;//maybe need to connect to data base
  const tax = subTotal*0.05;

  const subTotal = (qty1*price1)+(qty2*price2);

  const total = subTotal+tax;

  document.getElementById("subtotal").innerText="$"+subTotal.toFixed(2);
  document.getElementById("tax").innerText="$"+tax.toFixed(2);
  document.getElementById("total").innerText="$"+total.toFixed(2);
}

function removeItem(button)
{
  const cartItem = button.parentElement;
  cartItem.remove();
  updateTotal();
}