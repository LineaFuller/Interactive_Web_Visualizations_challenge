# Interactive_Web_Visualizations_challenge

In this assignment, I will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

# Process

Utilized the D3 library to read in samples.json and created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. I used sample_values as the values for the bar chart and used otu_ids as the labels for the bar chart. Lastly, I assigned the otu_labels as the hovertext for the chart.

I then created a bubble chart that displays each sample; using otu_ids for the x values and marker colors. I then used the sample_values for the y values and marker size. Display the sample metadata, i.e., an individual's demographic information.


I displayed the sample metadata (an individual's demographic information) as a key-value pair from the metadata JSON object somewhere on the page. All of the plots update any time that a new sample is selected.






