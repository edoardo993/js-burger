// definisco le variabili che mi serviranno
// var calculate = document.getElementById('ingredients-button');
// var burgerName = document.getElementById('burger-name');
// var burgerChecks = document.getElementsByClassName('check-input');
// var ingredientsCounter = 0;
// var total = 50;
// var coupon = ['MB-20', '20OFF', 'twenty'];
// var addCoupon = document.getElementById('add-coupon');
// var totalHtmlElement = document.getElementById('total');
// calculate.addEventListener("click", function() {
//   total = 50;
//   ingredientsCounter = 0;
//   for (var x=0; x<burgerChecks.length; x++) {
//     if (burgerChecks[x].checked) {
//       ingredientsCounter += 1;
//       total += parseInt(burgerChecks[x].value)
//     }
//   }
//   if (burgerName.value === '') {
//     alert('Devi inserire il nome del panino!')
//   } else if (ingredientsCounter<2) {
//       alert('Devi scegliere almeno due ingredienti!')
//   }
//   for (var x=0; x<coupon.length; x++) {
//     if (addCoupon.value === coupon[x]) {
//       total = (total * 0.8).toFixed(2)
//     }
//   }
//   totalHtmlElement.innerText = '$ ' + total;
// })


var hamburgerChoisesContainer = document.getElementsByClassName('hamburger-choises')[0];
var ingredients = hamburgerChoisesContainer.getElementsByTagName('input');
var calculate = document.getElementById('ingredients-button');
var burgerName = document.getElementById('burger-name');
var ingredientsCounter = 0;
var minIngredient = 2;
var total = 50;
var discount = 0.2;
var coupon = ['MB-20', '20OFF', 'twenty'];
var addCoupon = document.getElementById('add-coupon');
var totalHtmlElement = document.getElementById('total');
calculate.addEventListener("click", function() {
  total = 50;
  ingredientsCounter = 0;
  for (var x=0; x<ingredients.length; x++) {
    if (ingredients[x].checked) {
      ingredientsCounter += 1;
      total += parseInt(ingredients[x].value)
    }
  }
  if (burgerName.value === '') {
    alert('Devi inserire il nome del panino!')
  } else if (ingredientsCounter<minIngredient) {
      alert('Devi scegliere almeno ' + minIngredient + ' ingredienti!')
  } else {
    for (var x=0; x<coupon.length; x++) {
      if (addCoupon.value === coupon[x]) {
        total = total - (total*discount)
      }
    }
  totalHtmlElement.innerText = '$ ' + total;
  }
});
