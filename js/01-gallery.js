import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery')

const photos = galleryItems.map((photo) => 
  `
  <li class="gallery__item" >
  <a class="gallery__link" href="large-image.jpg">
  <img class="gallery__image"
  src=${photo.preview} 
  data-source=${photo.original} 
  alt='${photo.description}'>
  </a>
  </li>
  `
).join("")
 
galleryList.insertAdjacentHTML("afterbegin", photos)

galleryList.addEventListener('click', onPreviewImage)


function onPreviewImage (event) {
  
  event.preventDefault()

  if (event.target.nodeName !== "IMG") {
    return
  }

  const originalPhotos = galleryItems.map((photo) => {
    
    if (event.target.dataset.source !== photo.original) {
    return
    }
    
    const instance = basicLightbox.create(
      `<img src='${photo.original}' width="800" height="600">`, 
    {
      onShow: (instance) => {
      window.addEventListener('keydown', onEscapeKey)  
      },
      onClose: (instance) => {
      window.removeEventListener('keydown', onEscapeKey)
      }
      })
    
    instance.show()

    function onEscapeKey(event) {
        if (event.code === 'Escape') {
    instance.close()
  }
    }

  })
}