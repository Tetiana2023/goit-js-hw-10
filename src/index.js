import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById('search-box');
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

console.log(inputEl);

//inputEl.addEventListener('input', debounce((findCountry), DEBOUNCE_DELAY));

//  fetch(`https://restcountries.com/v3.1/all`)
//  .then(response => {
//     return response.json();
// })
// .then(country => {console.log(country);
// })
// .catch(error => {console.log(error);
// })
   
   
//   function findCountry() {
 fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
   .then(response => {
    return response.json()
}).then(countries => {console.log(countries)
    }).catch(error => {
        console.log(error)
    });
  


