import validateSearch from '../validation/formValidation.js';

export default function handleSearch(callBackFunction = () => {}) {
  const $searchBar = document.querySelector('#search-bar-pokemon');
  const $searchButton = document.querySelector('#search-pokemon-button');
  const $form = document.querySelector('#pokemon-search');

  $searchBar.onclick = () => {
    $searchBar.classList.remove('invalid-search');
    $searchBar.value = '';
  };
  $form.onsubmit = async (event) => {
    event.preventDefault();
    await validateSearch(callBackFunction, $searchBar.value);
  };

  $searchButton.onclick = async (event) => {
    event.preventDefault();
    await validateSearch(callBackFunction, $searchBar.value);
  };
}
