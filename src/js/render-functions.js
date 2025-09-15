import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

var lightbox = new SimpleLightbox('.gallery a', { captionData: "alt" });

const gallery = document.querySelector(".gallery");

export function createGallery(arrElem) {
  let htmlGallery = [];
  const readyElem = arrElem.map(elem => {
    htmlGallery.push(`
      <a href="${elem.largeImageURL}" class="gallery-item" style="background-image: url('${elem.webformatURL}')">
        <ul class="gallery-item-info">
          <li>Likes<br><span>${elem.likes}</span></li>
          <li>Views<br><span>${elem.views}</span></li>
          <li>Comments<br><span>${elem.comments}</span></li>
          <li>Downloads<br><span>${elem.downloads}</span></li>
        </ul>
      </a>
    `);
  });
  gallery.innerHTML = htmlGallery.join("");
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  const loader = document.querySelector(".loader");
  loader.classList.remove("hidden");
}

export function hideLoader() {
  const loader = document.querySelector(".loader");
  loader.classList.add("hidden");
}
// createGallery(image)
// Ця функція повинна приймати масив images, створювати HTML - розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().Нічого не повертає.

// clearGallery().
// Ця функція нічого не приймає та повинна очищати вміст контейнера галереї.Нічого не повертає.

// showLoader().
// Ця функція нічого не приймає, повинна додавати клас для відображення лоадера.Нічого не повертає.

// hideLoader().
// Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера.Нічого не повертає.

