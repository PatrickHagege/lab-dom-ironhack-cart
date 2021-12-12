// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.product input').value;
  let subtotalContainer = product.querySelector('.subtotal span');
  let subtotal = Number(price) * Number(quantity);
  subtotalContainer.textContent = `${subtotal}`;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  //console.log("products ", products);
  for (let i = 0; i < products.length; i++) {
    let product = products[i]
    console.log(product);
    updateSubtotal(product);
  }
  
  // ITERATION 3
  //... your code goes here
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    let product = products[i]
    total += Number(updateSubtotal(product));
  }
  const totalContainer = document.querySelector('#total-value span');
  console.log(totalContainer);
  totalContainer.innerHTML = `${total}`;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
