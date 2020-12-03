const request = require("request");

const breedSearch = process.argv[2];
const catSearchURL = "https://api.thecatapi.com/v1/breeds/search?q=";

request(`${catSearchURL}${breedSearch}`, function(error, response, body) {
  if (error) {
    console.log("Oops! Looks like there was an error with the search: ", error);
  } else {
    if (body === "[]") {
      console.log("Sorry, type of cat not found. Please try again");
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  }
});