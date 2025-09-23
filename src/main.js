import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector(".form");
const input = document.querySelector(".formInput");
const loadMore = document.querySelector(".loadMore");
let inputValue;

form.addEventListener("submit", e => {
  e.preventDefault();

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
    let findResoult = getImagesByQuery(input.value);
    findResoult
      .then(res => {
        if (res.hits.length == 0) {
          iziToast.warning({
            title: '⛔',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
          });
          hideLoader();
        } else {
          createGallery(res.hits);
          hideLoader();
          showLoadMoreButton();
        }
      })
      .catch(err => console.log(err));
  }
});

let pageNow = 1;
loadMore.addEventListener("click", e => {

  getImagesByQuery(inputValue, ++pageNow)
    .then(res => {
      createGallery(res.hits);
    })
});