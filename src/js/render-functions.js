export function createGalleryCard(images) {
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
