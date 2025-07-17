const menuIcon = document.querySelector('.div-img img:first-child');
  const modal = document.querySelector('.modal-background');
  const closeIcon = document.querySelector('.modal-icon-x');

  menuIcon.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeIcon.addEventListener('click', () => {
    modal.classList.remove('active');
  });
