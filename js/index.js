// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.product input').value;
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
  const products = document.getElementsByClassName('product');
  console.log("products ", products);
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
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
  //console.log(totalContainer);
  totalContainer.innerHTML = `${total}`;
}

// ITERATION 4

function removeProduct(event) {
  alert("coucou !");
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createProductNameInput = document.querySelector('.create-product td input[type="text"]');
  const createProductPriceInput = document.querySelector('.create-product td input[type="number"]');

  let cartTableBody = document.querySelector('#cart tbody');

  let productRow = document.createElement('tr');
  productRow.classList.add('product');

  let productNameCell = document.createElement('td');
  productNameCell.classList.add('name');

  let productNameSpan = document.createElement('span');
  productNameSpan.textContent = createProductNameInput.value;

  productNameCell.appendChild(productNameSpan);

  let productPriceCell = document.createElement('td');
  productPriceCell.classList.add('price');
  productPriceCell.textContent = '$';

  let productPriceSpan = document.createElement('span');
  productPriceSpan.textContent = createProductPriceInput.value;

  productPriceCell.appendChild(productPriceSpan);

  let productQuantityCell = document.createElement('td');
  productQuantityCell.classList.add('quantity');

  let productQuantityInput = document.createElement('input');
  Object.assign(productQuantityInput, {
    type:'number',
    value:'0',
    min:'0',
    placeholder:'Quantity'
  });

  productQuantityCell.appendChild(productQuantityInput);

  let productSubtotalCell = document.createElement('td');
  productSubtotalCell.classList.add('subtotal');
  productSubtotalCell.textContent = '$';

  let productSubtotalSpan = document.createElement('span');
  productSubtotalSpan.textContent = '0';

  productSubtotalCell.appendChild(productSubtotalSpan);

  let productActionCell = document.createElement('td');
  productActionCell.classList.add('action');

  let removeProductBtn = document.createElement('button');
  removeProductBtn.classList.add('btn', 'btn-remove');
  removeProductBtn.textContent = 'Remove';

  productActionCell.appendChild(removeProductBtn);

  productRow.appendChild(productNameCell);
  productRow.appendChild(productPriceCell);
  productRow.appendChild(productQuantityCell);
  productRow.appendChild(productSubtotalCell);
  productRow.appendChild(productActionCell);
  
  cartTableBody.appendChild(productRow);

  //console.log(createProductNameInput.value);
  //console.log(createProductPriceInput.value);
  //console.log(cartTableBody);
}

window.addEventListener('load', () => {
    
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.getElementsByClassName('btn-remove');
  //console.log(removeBtns);
  for (const removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});
