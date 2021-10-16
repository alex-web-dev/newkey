const $openVideoPopup = document.querySelector('.product__popup-btn_video');
const $openSchemePopup = document.querySelector('.product__popup-btn_scheme');
const $open3DPopup = document.querySelector('.product__popup-btn_3d');

if ($openVideoPopup) {
  $openVideoPopup.addEventListener('click', () => {
    const $popup = document.querySelector('.popup_video');
    $popup.classList.remove('popup_hide');
  });
}

if ($openSchemePopup) {
  $openSchemePopup.addEventListener('click', () => {
    const $popup = document.querySelector('.popup_scheme');
    $popup.classList.remove('popup_hide');
  });
}

if ($open3DPopup) {
  $open3DPopup.addEventListener('click', () => {
    const $popup = document.querySelector('.popup_3d');
    $popup.classList.remove('popup_hide');
  });
}

const $productImages = document.querySelectorAll('.product-slider__img');
$productImages.forEach($img => {
  $img.addEventListener('click', () => {
    openImgPopup($img.src);
  });
});

function openImgPopup(src) {
  const $popup = document.createElement('div');
  $popup.className = 'popup popup_img';
  $popup.innerHTML = `
    <div class="popup__content">
      <img src="${src}" alt="" class="popup__img">
    </div>
    <div class="close popup__close"></div>
  `;

  document.body.appendChild($popup);

  const $close = $popup.querySelector('.popup__close');
  $close.addEventListener('click', () => {
    $popup.remove(); 
  });

  $popup.addEventListener('click', e => {
    if (e.target.className === $popup.className) {
      $popup.remove();
    }
  });
}