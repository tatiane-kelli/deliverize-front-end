function OpenModal(modalID) {
  if(localStorage.closeModal !== modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
      modal.classList.add('show');
    }
  }
}

const logo = document.querySelector('.button');
logo.addEventListener('click', () => OpenModal('popover'));

document.addEventListener('scroll', () => {
  if(window.pageYOffset > 800) {
    OpenModal('popover')
  }
})

export default OpenModal;