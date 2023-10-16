import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.esmnp';
import { fetchPix } from "./searchPhotounc";
import { createMarkup } from "./markup"

const refs = {
    form: document.getElementById('search-form'),
    input: document.getElementById('search-input')
    gallery: document.getElementById('.gallery'),
}

refs.form.addEventListener("submit", searchPhoto);
async function searhPhoto(event) {
    event.preventDefault();
    const Photo = refs.input.value;
    const { hits } = await fetchPix(Photo)
    console.log(hits)

    refs.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});