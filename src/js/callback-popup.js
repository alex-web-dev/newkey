const $callbackPopup = document.querySelector('.popup-callback');
if ($callbackPopup) {
  const $closePopup = $callbackPopup.querySelector('.popup-callback__close');
  $closePopup.addEventListener('click', () => {
    $callbackPopup.classList.add('popup-callback_hide');
  });

  $callbackPopup.addEventListener('click', e => {
    if (e.target.className === $callbackPopup.className) {
      $callbackPopup.classList.add('popup-callback_hide');
    }
  });

  const $openCallbackPopupBtns = document.querySelectorAll('.btn-callback-popup');
  $openCallbackPopupBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      $callbackPopup.classList.remove('popup-callback_hide');
    });
  });
}