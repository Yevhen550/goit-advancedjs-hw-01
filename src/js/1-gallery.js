import images from './galleryData.json';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryCard(images);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryCard(images) {
  return images.reduce((acc, { original, preview, description }) => {
    return (
      acc +
      `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            title="${description}"
            />
          </a>
        </li>
    `
    );
  }, '');
}
