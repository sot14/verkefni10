import { randomDate } from './helpers';

/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'r6UXwIq4WhnbYI5v4ovcWngmhW5kIPs824106fdW';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';
let URL_date;


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
  const date = randomDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  URL_date = `${year}-${month}-${day}`;

  fetch(`${URL}$?api_key=${API_KEY}&date=${URL_date}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Non 200 status');
      }
      return res.json();
    })
    .catch((error) => {
      console.error('Villa við að sækja gögn', error);
    });
}
