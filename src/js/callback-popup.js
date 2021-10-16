const $callbackPopup = document.querySelector('.popup_callback');
if ($callbackPopup) {
  const $openCallbackPopupBtns = document.querySelectorAll('.btn-callback-popup');
  $openCallbackPopupBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      $callbackPopup.classList.remove('popup_hide');
    });
  });
}