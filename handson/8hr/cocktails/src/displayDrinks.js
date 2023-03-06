import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';
const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');
  if (!drinks) {
    // hide loading
    hideLoading();
    title.textContent = 'sorry, no drinks matched your search';
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
  hideLoading();
  title.textContent = '';
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;

/*
High-level summary:

This is a JavaScript module that exports a function called displayDrinks. The function takes an object called drinks as its argument and
generates HTML content based on the data contained in drinks. If drinks is empty, the function displays an error message. Otherwise,
 it generates HTML content for each drink in drinks, and then adds that content to the page.

Line-by-line technical explanation:

    import get from './getElement.js';: This line imports a function called get from a module called getElement.js.

    import { hideLoading } from './toggleLoading.js';: This line imports a function called hideLoading from a module called toggleLoading.js.

    const displayDrinks = ({ drinks }) => {...};: This line defines a function called displayDrinks that takes an object as its argument. The object has a property called drinks, which is an array of objects that contain information about drinks.

    const section = get('.section-center');: This line selects an element with the class name section-center and assigns it to a variable called section.

    const title = get('.title');: This line selects an element with the class name title and assigns it to a variable called title.

    if (!drinks) {...}: This line checks if the drinks array is empty. If it is empty, the function will display an error message.

    hideLoading();: This line calls the hideLoading function to hide a loading spinner that is displayed when the page is initially loaded.

    title.textContent = 'sorry, no drinks matched your search';: This line sets the text content of the title element to an error message.

    section.innerHTML = null;: This line sets the HTML content of the section element to null, effectively clearing any previous content.

    return;: This line exits the function if the drinks array is empty.

    const newDrinks = drinks .map((drink) => {...}).join('');: This line creates a new array called newDrinks by mapping over each object in the drinks array and generating HTML content for each one. The HTML content is generated using template literals and the properties of each object.

    hideLoading();: This line calls the hideLoading function again to hide the loading spinner.

    title.textContent = '';: This line sets the text content of the title element to an empty string, effectively clearing any error message.

    section.innerHTML = newDrinks;: This line sets the HTML content of the section element to the HTML content generated in step 11.

    return section;: This line returns the section element so that it can be used elsewhere in the code.

    export default displayDrinks;: This line exports the displayDrinks function as the default export of the module, allowing it to be imported and used in other modules.
    */