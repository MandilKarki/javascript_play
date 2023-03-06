import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';

const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const img = get('.drink-img');
  const drinkName = get('.drink-name');
  const description = get('.drink-desc');
  const ingredients = get('.drink-ingredients');
  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join('');
};
export default displayDrink;

/*
High-level summary:

This is a JavaScript module that exports a function called displayDrink. The function takes an object called data as its argument and
generates HTML content based on the data contained in data. It then adds that content to the page.

Line-by-line technical explanation:

    import { hideLoading } from './toggleLoading.js';: This line imports a function called hideLoading from a module called toggleLoading.js.

    import get from './getElement.js';: This line imports a function called get from a module called getElement.js.

    const displayDrink = (data) => {...};: This line defines a function called displayDrink that takes an object called data as its argument. The object has a property called drinks, which is an array of objects that contain information about drinks.

    hideLoading();: This line calls the hideLoading function to hide a loading spinner that is displayed when the page is initially loaded.

    const drink = data.drinks[0];: This line assigns the first object in the drinks array to a variable called drink.

    const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;: This line uses destructuring assignment to extract three properties from the drink object: strDrinkThumb, strDrink, and strInstructions. These properties are assigned to variables called image, name, and desc, respectively.

    const list = [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5];: This line creates an array called list that contains the first five ingredients in the drink object.

    const img = get('.drink-img');: This line selects an element with the class name drink-img and assigns it to a variable called img.

    const drinkName = get('.drink-name');: This line selects an element with the class name drink-name and assigns it to a variable called drinkName.

    const description = get('.drink-desc');: This line selects an element with the class name drink-desc and assigns it to a variable called description.

    const ingredients = get('.drink-ingredients');: This line selects an element with the class name drink-ingredients and assigns it to a variable called ingredients.

    img.src = image;: This line sets the src attribute of the img element to the image variable, which contains the URL of the drink's image.

    document.title = name;: This line sets the title of the document to the name variable, which contains the name of the drink.

    drinkName.textContent = name;: This line sets the text content of the drinkName element to the name variable, which contains the name of the drink.

    description.textContent = desc;: This line sets the text content of the description element to the desc variable, which contains the description of the drink.

    ingredients.innerHTML = list .map((item) => {...}).join('');: This line generates HTML content for each ingredient in the list array, and then adds that content to the ingredients element. If an ingredient is null or undefined, it is not displayed. The HTML content is generated using template literals and the far fa-check-square icon from Font Awesome.

    export default displayDrink;: This line exports the displayDrink function as the default export

*/