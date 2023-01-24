import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById('search-box');
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

inputEl.addEventListener('input', debounce((findCountry), DEBOUNCE_DELAY));
