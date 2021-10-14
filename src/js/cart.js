window.addEventListener('load', () => {
  const $productDecrementBtns = document.querySelectorAll('.product-item__dec');
  const $productIncrementsBtns = document.querySelectorAll('.product-item__inc');

  $productDecrementBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const $product = $btn.closest('.product-item');
      const $productCountInput = $product.querySelector('.product-item__count-input');

      if (+$productCountInput.value <= 1) {
        return;
      }

      $productCountInput.value = +$productCountInput.value - 1;
    });
  });

  $productIncrementsBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const $product = $btn.closest('.product-item');
      const $productCountInput = $product.querySelector('.product-item__count-input');

      $productCountInput.value = +$productCountInput.value + 1;
    });
  });

  const $productCartBtns = document.querySelectorAll('.product-item__btn');
  $productCartBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const $product = $btn.closest('.product-item');
      const $cartBtn = document.querySelector('.header__cart-btn');

      moveToCart($product, $cartBtn);
    });
  });

  const $cart = document.querySelector('.cart');
  if ($cart) {
    updateCartTotal();

    const $cartUpdateBtns = document.querySelectorAll('.cart-update-total');
    $cartUpdateBtns.forEach($btn => {
      $btn.addEventListener('click', () => {
        setTimeout(() => {
          updateCartTotal();
        });
      });
    });

    const $cartSelectAll = document.querySelector('.cart-select-all');
    $cartSelectAll.addEventListener('click', () => {
      const $cartProductsChecboxes = document.querySelectorAll('.product-item__checkbox .checkbox__input');
      $cartProductsChecboxes.forEach($checkbox => $checkbox.checked = $cartSelectAll.checked);
    });
  }
});


function updateCartTotal() {
  const $cartSum = document.querySelector('.cart__sum');
  const $cartDiscount = document.querySelector('.cart__discount');
  const $cartTotal = document.querySelector('.cart__total');

  const $cartItems = document.querySelectorAll('.cart__item');
  let sum = 0;
  let discount = 0;
  $cartItems.forEach($item => {
    const itemSelect = $item.querySelector('.checkbox__input').checked;
    if (!itemSelect) {
      return;
    }

    const itemPrice = +$item.dataset.price;
    const itemCount = +$item.querySelector('.product-item__count-input').value;
    
    sum += itemPrice * itemCount;
    discount += +$item.dataset.discount * itemCount;
  });

  const total = sum - discount;
  
  $cartSum.innerHTML = `${sum} ₽`;
  $cartDiscount.innerHTML = `${discount} ₽`;
  $cartTotal.innerHTML = `${total} ₽`;
}

function moveToCart($item, $cart) {
  const itemPosition = $item.getBoundingClientRect();
  const cartPosition = $cart.getBoundingClientRect();
  
  const $itemClone = $item.cloneNode(true);
  $itemClone.classList.add('product-item_fly');
  $itemClone.querySelectorAll('.product-list-item-props, .product-item__btn, .product-item__counter')
    .forEach($elem => $elem.remove());

  $itemClone.style.width = `${$item.offsetWidth}px`;
  $itemClone.style.left = `${itemPosition['x']}px`;
  $itemClone.style.top = `${itemPosition['y']}px`;

  const additionYOffset = window.innerWidth > 992 ? 55 : 140;

  const itemXStart = itemPosition['x'] + 0.5 * itemPosition['width'];
  const itemYStart = itemPosition['y'] + additionYOffset;

  const itemXEnd = (cartPosition['x'] + 0.5 * cartPosition['width']) - itemXStart;
  const itemYEnd = (cartPosition['y']) - itemYStart;

  document.body.appendChild($itemClone);  

  setTimeout(() => {
    $itemClone.style.transform = "translateX("+itemXEnd+"px)";
    $itemClone.style.transform += "translateY("+itemYEnd+"px)";
    $itemClone.style.transform += "scale(0.02)";
  });

  setTimeout(() => document.body.removeChild($itemClone), 750);
}