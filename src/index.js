import './css/styles.css';
import { fetchCountries }  from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById('search-box');
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

console.log(inputEl);

inputEl.addEventListener('input', debounce((findCountry), DEBOUNCE_DELAY));
   
   function findCountry(e) {
  
    let name = e.target.value.trim();
    console.log(name);

    if(!name){
      countryInfo.innerHTML = "";
       countryList.innerHTML = "";
        return;
    }
    
    fetchCountries(name).then(renderCountryList).catch((error) =>
    {  Notiflix.Notify.failure("Oops, there is no country with that name");
      countryInfo.innerHTML = "";
      countryList.innerHTML = "";
      return error;})
       }
 
function renderCountryList( countries ) {
   countryInfo.innerHTML = "";
   countryList.innerHTML = countries.map(({ flags:{svg}, name:{official}}) => 
   { return  `<li >
    <img  src=" ${svg}" alt="Flag of " ${official} width="60" />
    <p class="country-title"> ${official}</p>
   </li>`})
   .join('') 
   
   if(countries.length === 1){    
      countryInfo.innerHTML = countries.map (( {capital, population, languages} ) => 
      {return `  <p> Capital: ${capital} </p>
           <p> Population: ${population} </p>
           <p> Languages: ${Object.values(languages)} </p>`})
      .join('')

   }else if(countries.length > 10){
      countryInfo.innerHTML = "";
      countryList.innerHTML = "";
      Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");

   } 
 }


