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
  })
})

function moveToCart($item, $cart) {
  const itemPosition = $item.getBoundingClientRect();
  const cartPosition = $cart.getBoundingClientRect();
  
  const $itemClone = $item.cloneNode(true);
  $itemClone.querySelectorAll('.product-list-item-props, .product-item__btn, .product-item__counter')
    .forEach($elem => $elem.remove());

  $itemClone.style.position= "fixed";
  $itemClone.style.zIndex = 8;
  $itemClone.style.left = `${itemPosition['x']}px`;
  $itemClone.style.top = `${itemPosition['y']}px`;

  const itemXStart = itemPosition['x'] + 0.5 * itemPosition['width'];
  const itemYStart = itemPosition['y'] + 0.5 * itemPosition['height'];

  const itemXEnd = (cartPosition['x'] + 0.5 * cartPosition['width']) - itemXStart;
  const itemYEnd = (cartPosition['y'] + 0.5 * cartPosition['height']) - itemYStart;

  document.body.appendChild($itemClone);  

  setTimeout(() => {
    $itemClone.style.transform= "translateX("+itemXEnd+"px)";
    $itemClone.style.transform+= "translateY("+itemYEnd+"px)";
    $itemClone.style.transform+= "scale(0.03)";
    $itemClone.style.transition= "1s";
  });

  setTimeout(() => document.body.removeChild($itemClone), 900);
}