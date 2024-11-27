const data = [
  {
    "name": "Camlin Rueled 165 pages",
    "price": 55,
    "qty": 2,
    "image": "https://shop.ourstore.in/wp-content/uploads/2023/01/ourstore-2023-01-25T010925.890.png",
    "id":"../ProductDescription/note1.html"
    
  },
  {
    "name": "Camlin Kokuyo",
    "price": 60,
    "qty": 1,
    "image": "https://images-eu.ssl-images-amazon.com/images/I/61XU5XKCHTL._AC_UL600_SR600,600_.jpg",
    "id":"../ProductDescription/pencil2.html"
  },
  {
    "name": "Doms Neon Eraser",
    "price": 5,
    "qty": 2,
    "image": "https://clickere.in/cdn/shop/products/Doms-Neon-Eraser_580x.jpg?v=1698477768",
    "id":"../ProductDescription/ext3.html"
  },
  {
    "name": "India Outline Map",
    "price": 3,
    "qty": 10,
    "image": "https://i.pinimg.com/originals/20/14/65/201465e5550329f6c0d0fe4fb6be2781.gif",
    "id":"../ProductDescription/pas5.html"
  },
  {
    "name": "Sky Bags sum-tung-wong",
    "price": 1580,
    "qty": 1,
    "image": "https://skybags.co.in/cdn/shop/files/1_c724819a-d097-4756-8749-044d379959e2.jpg?v=1690192925",
    "id":"../ProductDescription/Bag5.html"
  },
  {
    "name": "Life of Pi",
    "price": 354,
    "qty": 1,
    "image": "../../images/book_img/adimg/Life of Pi.webp",
    "id":"../Adventure/ad7.html"
  }
];

const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

let grandTotal = 0;

// displaying cart items
data.forEach((item) => {
  const itemElement = document.createElement('div');
  itemElement.classList.add('box');
  itemElement.innerHTML = `
    <a href="${item.id}" class="item-link">
      <img src="${item.image}" class="image" alt="">
      <h3 class="name">${item.name}</h3>
    </a>
    <div class="flex">
      <p class="price"><i class="fas fa-indian-rupee-sign"></i> ${item.price}</p>
      <input type="number" name="qty" required min="1" value="${item.qty}" max="99" maxlength="2" class="qty">
      <button class="fas fa-edit"></button>
    </div>
    <p class="sub-total">sub total : <span><i class="fas fa-indian-rupee-sign"></i> ${item.price * item.qty}</span></p>
    <button class="delete-btn">delete</button>
  `;
  cartItems.appendChild(itemElement);

  grandTotal += item.price * item.qty;

  // edit button
  itemElement.querySelector('.fa-edit').addEventListener('click', () => {
    const newQty = itemElement.querySelector('.qty').value;
    grandTotal = grandTotal - (item.price * item.qty) + (item.price * newQty);
    item.qty = newQty;
    itemElement.querySelector('.sub-total span').innerHTML = `<i class="fas fa-indian-rupee-sign"></i> ${item.price * item.qty}`;
    cartTotal.querySelector('p span').innerHTML = `<i class="fas fa-indian-rupee-sign"></i> ${grandTotal}`;
  });

  // delete button
  itemElement.querySelector('.delete-btn').addEventListener('click', () => {
    grandTotal -= item.price * item.qty;
    cartItems.removeChild(itemElement);
    cartTotal.querySelector('p span').innerHTML = `<i class="fas fa-indian-rupee-sign"></i> ${grandTotal}`;
  });
});
// Total amount box
cartTotal.innerHTML = `
  <p>grand total : <span><i class="fas fa-indian-rupee-sign"></i> ${grandTotal}</span></p>
  <button class="delete-btn" id="emptyCart">empty cart</button>
  <a href="../Stationary/payment.html" class="btn">proceed to checkout</a>
`;
// empty cart button
document.getElementById('emptyCart').addEventListener('click', () => {
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  grandTotal = 0;
  cartTotal.querySelector('p span').innerHTML = `<i class="fas fa-indian-rupee-sign"></i> ${grandTotal}`;
});
