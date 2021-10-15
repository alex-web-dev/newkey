window.addEventListener('load', () => {
  const $productDecrementBtns = document.querySelectorAll('.counter-form__dec');
  const $productIncrementsBtns = document.querySelectorAll('.counter-form__inc');

  $productDecrementBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const $product = $btn.closest('.product-item');
      const $productCountInput = $product.querySelector('.counter-form__input');

      if (+$productCountInput.value <= 1) {
        return;
      }

      $productCountInput.value = +$productCountInput.value - 1;
    });
  });

  $productIncrementsBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const $product = $btn.closest('.product-item');
      const $productCountInput = $product.querySelector('.counter-form__input');

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

const $cartPopup = document.querySelector('.cart-popup');
if ($cartPopup) {
  $cartPopup.addEventListener('click', e => {
    if (e.target.className === $cartPopup.className) {
      $cartPopup.classList.add('cart-popup_hide');
    }
  });

  const $openPopupBtns = document.querySelectorAll('.open-cart-popup');
  $openPopupBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      $cartPopup.classList.remove('cart-popup_hide');
    });
  });

  const $closePopup = document.querySelector('.cart-popup__close');
  $closePopup.addEventListener('click', () => {
    $cartPopup.classList.add('cart-popup_hide');
  });
}


function updateCartTotal() {
  const $cartSum = document.querySelector('.cart__sum');
  const $cartDiscount = document.querySelector('.cart__discount');
  const $cartTotal = document.querySelector('.cart__total');
  const $cartPopupDiscount = document.querySelector('.cart-popup__discount span')
  const $cartPopupTotal = document.querySelector('.cart-popup__total span')

  const $cartItems = document.querySelectorAll('.cart__item');
  let sum = 0;
  let discount = 0;
  $cartItems.forEach($item => {
    const itemSelect = $item.querySelector('.checkbox__input').checked;
    if (!itemSelect) {
      return;
    }

    const itemPrice = +$item.dataset.price;
    const itemCount = +$item.querySelector('.counter-form__input').value;
    
    sum += itemPrice * itemCount;
    discount += +$item.dataset.discount * itemCount;
  });

  const total = sum - discount;
  
  $cartSum.innerHTML = `${sum} ₽`;
  $cartDiscount.innerHTML = `${discount} ₽`;
  $cartTotal.innerHTML = `${total} ₽`;
  $cartPopupDiscount.innerHTML = `${discount} ₽`;
  $cartPopupTotal.innerHTML = `${total} ₽`;
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

  const additionYOffset = window.innerWidth > 992 ? 55 : 160;
  const additionXOffset = window.innerWidth > 992 ? 0 : 20;

  const itemXStart = itemPosition['x'] + 0.5 * itemPosition['width'] + additionXOffset;
  const itemYStart = itemPosition['y'] + additionYOffset;

  const itemXEnd = (cartPosition['x'] + 0.5 * cartPosition['width']) - itemXStart;
  const itemYEnd = (cartPosition['y']) - itemYStart;

  document.body.appendChild($itemClone);  

  setTimeout(() => {
    $itemClone.style.transform = "translateX("+itemXEnd+"px)";
    $itemClone.style.transform += "translateY("+itemYEnd+"px)";
    $itemClone.style.transform += "scale(0.02)";
  });

  setTimeout(() => document.body.removeChild($itemClone), 11750);
}