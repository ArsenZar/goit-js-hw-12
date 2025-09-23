import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector(".form");
const input = document.querySelector(".formInput");
const loadMore = document.querySelector(".loadMore");
let scrollPX;
let totalPage;
let inputValue;
let pageNow;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  hideLoadMoreButton();
  pageNow = 1;

  if (input.value.trim() == "") {
    iziToast.warning({
      title: '😱',
      message: 'Enter text in input',
      position: 'topRight'
    });
  } else {
    inputValue = input.value;

    clearGallery();
    showLoader();
    let findResoult = await getImagesByQuery(input.value, pageNow);
    totalPage = Math.ceil(findResoult.totalHits / 15);

    if (findResoult.hits.length == 0) {
      iziToast.warning({
        title: '⛔',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
      });
      hideLoader();
    } else {
      createGallery(findResoult.hits);
      hideLoader();
      showLoadMoreButton();
    }
  }

  let itemGallery = document.querySelector(".gallery-item");
  scrollPX = itemGallery.getBoundingClientRect().height;

});


loadMore.addEventListener("click", async (e) => {
  e.preventDefault();
  hideLoadMoreButton();
  showLoader();

  let findResoult = await getImagesByQuery(inputValue, ++pageNow);
  hideLoader();
  showLoadMoreButton();
  createGallery(findResoult.hits);
  
  if (pageNow > totalPage) {
    iziToast.warning({
      title: '⛔',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight'
    });
    hideLoadMoreButton();
  }


  window.scrollBy({
    top: scrollPX * 2.5 + 48,
    behavior: "smooth",
  });

});