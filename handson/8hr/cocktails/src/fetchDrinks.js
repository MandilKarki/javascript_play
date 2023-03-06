import { showLoading } from './toggleLoading.js';
const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;

/*
Sure, here's an explanation of what this code does in three steps:

Step 1: Importing a Function

    This code imports a function called showLoading from a module located in the toggleLoading.js file using the import statement.

Step 2: Fetching Data from an API

    This code defines an asynchronous function called fetchDrinks that takes a single argument url.
    When the function is called, it first calls the showLoading function to display a loading spinner or message to the user.
    It then uses the await keyword to make an HTTP request to the specified url using the fetch() method, which returns a promise that resolves to the response from the server.
    The response is then converted to JSON format using the response.json() method, which also returns a promise that resolves to the parsed JSON data.
    The parsed JSON data is returned from the function.

Step 3: Handling Errors

    If an error occurs during the HTTP request or the JSON parsing process, the code catches the error using a try...catch statement and logs it to the console using console.log().

Finally, the fetchDrinks function is exported as the default export of this module, which means it can be imported and used in other parts of the application.
*/