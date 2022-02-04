// Read json file with d3 library

const dataPromise = d3.json("../../data/samples.json");
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json("../../data/samples.json").then((data));