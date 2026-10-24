const lightbox = document.querySelector('.lightbox');
let opener;
if (lightbox && typeof lightbox.showModal === 'function') {
  const image = lightbox.querySelector('img');
  document.querySelectorAll('.photo-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      lightbox.querySelector('p').textContent = link.closest('figure').querySelector('figcaption').textContent;
      lightbox.showModal();
      document.body.style.overflow = 'hidden';
    });
  });
  lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('close', () => { document.body.style.overflow = ''; opener?.focus(); });
}
