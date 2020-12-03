const { fetchBreedDescription } = require("./breedFetcher");

const breedSearch = process.argv[2];

fetchBreedDescription(breedSearch, (error, desc) => {
  if (error) {
    console.log("Error getting data. Details: ", error);
  } else {
    console.log(desc);
  }
});