import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery')

const photos = galleryItems.map((photo) => 
  `
  <li class="gallery__item">
   <a class="gallery__link" href=${photo.original}>
      <img class="gallery__image" src=${photo.preview} alt="${photo.description}" />
   </a>
</li>
  `
).join("")
 
galleryList.insertAdjacentHTML("afterbegin", photos)

galleryList.addEventListener('click', onPreviewImage)

  const lightbox = new SimpleLightbox('.gallery a',
    {
      captionsData: 'alt',
      captionDelay: 250
 });

function onPreviewImage(event) {
  event.preventDefault()

    if (event.target.nodeName !== "IMG") {
    return
  }


}