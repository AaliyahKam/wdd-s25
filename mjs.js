
let specialIndex = 0;
const specials = [
  "🍓 Today's Special: 50% off all Berry Smoothies!",
  "🍫 Get a FREE topping with every Chocolate Sundae!",
  "🥭 Buy 1 Mango Smoothie, Get 1 Free!",
  "🍦 Vanilla Swirl only $1.99 today!"
];

function initPage() {
  document.getElementById("btn1").addEventListener("click", showSpecial);
  document.getElementById("btn2").addEventListener("click", clearMessage);
  document.getElementById("btn3").addEventListener("click", submitOrder);
}

function showSpecial() {
  document.getElementById("output").innerText = specials[specialIndex];
  specialIndex = (specialIndex + 1) % specials.length;
}

function clearMessage() {
  document.getElementById("output").innerText = "";
}

function submitOrder() {
  const name = document.forms["orderForm"]["custName"].value;
  const pass = document.forms["orderForm"]["custPass"].value;
  const selectedItems = Array.from(document.forms["orderForm"]["items"])
    .filter(input => input.checked)
    .map(input => input.value);

  if (!name || !pass) {
    alert("Please enter both name and password to continue.");
    return;
  }

  if (selectedItems.length === 0) {
    alert("Please select at least one item to order.");
    return;
  }

  alert("Thank you, " + name + "! You've ordered: " + selectedItems.join(", "));
}
