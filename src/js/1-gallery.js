import images from './galleryData.json';
import { createGalleryCard } from './render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryCard(images);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
