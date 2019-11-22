
/**
 * Hreinsa börn úr elementi
 *
 * @param {object} element Element sem á að hreinsa börn úr
 */
export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * Búa til element og aukalega setja börn ef send með
 *
 * @param {string} name Nafn á element
 * @param  {...any} children Börn fyrir element
 */
export function el(name, ...children) {
  const element = document.createElement(name);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}

/**
* Skilar tölu af handahófi á bilinu [min, max]
*/
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomDate() {
  const year = randomNumber(1995, 2019);
  const month = randomNumber(1, 12);
  let day;
  if (month === 2) {
    day = randomNumber(1, 28);
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    day = randomNumber(1, 30);
  } else day = randomNumber(1, 31);

  return new Date(year, month, day);
}
