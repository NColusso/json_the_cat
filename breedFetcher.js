const request = require("request");


const fetchBreedDescription = function(breedSearch, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, function(error, response, body) {
    if (error) {
      return callback(error, null);
    } else {
      if (body === "[]") {
        return callback("Cat not found", null);
      } else {
        const data = JSON.parse(body);
        return callback(null, data[0].description);
      }
    }
  });
};


module.exports = {fetchBreedDescription};

// request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, function(error, response, body) {
//   if (error) {
//     console.log("Oops! Looks like there was an error with the search: ", error);
//   } else {
//     if (body === "[]") {
//       console.log("Sorry, type of cat not found. Please try again");
//     } else {
//       console.log(data[0].description);
//     }
//   }
// });