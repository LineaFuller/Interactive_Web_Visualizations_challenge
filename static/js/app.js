// Read json file with d3 library
const dataPromise = d3.json("./data/samples.json");
// console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
// d3.json("./data/samples.json").then((data) => console.log(data));

// Dropdown menu 
d3.json("./data/samples.json").then((data) => {
  var metadata = d3.select("#sample-metadata");
  metadata.html("");
  Object.entries(data).forEach(([key, value]) => {
    divMetadata.append("div").text(`${key}: ${value}`);
  });
})

// Sample ID
var dropdownID = 940;


// Sample Values
d3.json("./data/samples.json").then((data) => {
  // var sample = data.samples.filter(function (objData){
  //     return objData.id == dropdownID
  // })[0]
  // console.log(sample)
  var sample = data.samples.filter((objData) => objData.id == dropdownID)[0];
 
  // console.log(sample)
  var topValues = sample.sample_values;
  var otuID = sample.otu_ids;

  var otuLabel = sample.otu_labels;

 
  // console.log(topValues, otuID, otuLabel)
  var bar_chart = {
    x: topValues.slice(0, 10).reverse(),
    y: otuID
      .slice(0, 10)
      .map(function (otu_name) {
        return "OTU " + otu_name;
      })
      .reverse(),
    type: "bar",
    orientation: "h",
    text: otuLabel.slice(0, 10).reverse(),
  };
  
  var chartLayout = {
      title: "Top 10 OTUs found in an Individual",
      margin: {t:30, l:150}
  };
  let bar_data = [bar_chart];

  Plotly.newPlot("bar", bar_data, chartLayout);

  var bubble_chart = {
    x: otuID,
    y: topValues,
    mode: "markers",
    marker: {
    color: otuID,
      size: topValues,
    },
    text: otuLabel
  };
  
  var bubbleLayout = {
      title: "OTUs per Sample",
     
  };

  var bubble_data = [bubble_chart];

  Plotly.newPlot("bubble", bubble_data, bubbleLayout);
});

function init (){
  var selector = d3.select("#selDataset");
  d3.json("./data/samples.json").then((data) => {
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
      .append("option")
      .text(sample)
      .property("value", sample);
    })
  })
}


// Update Function
// function updatePlotly(){
//     var dropdownMenu = d3.select("#selDataset");
//     var dataset = dropdownMenu.property("value");

  