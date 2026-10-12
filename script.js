const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

// Перед публикацией замени номер на настоящий номер мамы.
// Формат для ссылки: +79991234567 (без пробелов и скобок).
const bookingPhone = '+79378227444';
const phoneLink = document.getElementById('phoneLink');
const phoneText = document.getElementById('phoneText');

if (phoneLink && phoneText) {
  phoneLink.href = `tel:${bookingPhone}`;
  phoneText.textContent = bookingPhone;
}
