const $popups = document.querySelectorAll('.popup');

$popups.forEach($popup => {
  const $close = $popup.querySelector('.popup__close');
  $close.addEventListener('click', () => {
    $popup.classList.add('popup_hide');
  });

  $popup.addEventListener('click', e => {
    if (e.target.className === $popup.className) {
      $popup.classList.add('popup_hide');
    }
  });
});

