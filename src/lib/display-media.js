import { save } from './storage';
import { load } from './storage';

// breytur til þess að halda utan um html element nodes
let title; // titill fyrir mynd á forsíðu
let text; // texti fyrir mynd á forsíðu
let img; // mynd á forsíðu

let image; // object sem inniheldur núverandi mynd á forsíðu.
  
/*
 * Sækir nýja Mynd af handahófi frá Nasa API og birtir hana á forsíðunni
 * ásamt titli og texta.
 */
function getNewImage() {
  image = JSON.parse(nasa-api.getRandomImage()).then((image) => {
    text.appendChild(createTextNode(image.explanation));
    title.appendChild(createTextNode(image.title));
    img.src = image.hdurl;
  });
}

/*
 * Vistar núverandi mynd í storage.
 */
function saveCurrentImage() {
  save(image.media_type, image.hdurl, image.text, image.title);
}

/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */
export default function init(apod) {
  title = apod.querySelector('apod__title');
  text = apod.querySelector('apod__text');
  img = apod.querySelector('apod__image');
  
  const bNew = apod.querySelector('#new-image-button');
  const bSave = apod.querySelector('#save-image-button');
  
  bNew.addEventListener('click', getNewImage);
  bSave.addEventListener('click', saveCurrentImage);
  
  getNewImage();
}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */

export function loadFavourites() {
  const fPage = document.querySelector('favourites-page');
  const fImage = load();
  const main = fPage.querySelector('main');

  for (let i = 0; i < fImage.length; i += 1) {
    const div = fPage.createElement('div');
    main.appendChild(div);

    const fImg = fPage.createElement('img');
    fImg.src = fImage[i].mediaUrl;

    const fTitle = fPage.createElement('h1');
    fTitle.appendChild(createTextNode(fImage[i].title));

    const fText = fPage.createElement('p');
    fText.appendChild(createTextNode(fImage[i].text));

    div.appendChild(fImg);
    div.appendChild(fTitle);
    div.appendChild(fText);
    main.appendChild(div);
  }
}
