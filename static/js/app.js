// from data.js
var tableData = data;
var tBody = d3.select("tbody");

console.log(tableData);

//populate initial table
tableData.forEach((encounter) => {
   console.log(encounter);
    
    //add a row
   var row = tBody.append("tr");
    
    Object.entries(encounter).forEach(([key, value]) => {
     console.log(key, value);

     //add cell
     var cell = tBody.append("td");
     cell.text(value);
   });
 });

var submit = d3.select("#filter-btn");

function comparedate(input) {
  return input.datetime === document.getElementById('datetime').value;
};

function comparecountry(input) {
  return input.country === document.getElementById('country').value;
};

submit.on("click", function() {
  d3.event.preventDefault();

  //clear the table
  d3.select("tbody").html("");

  //rebuild the table
  tableData = data.filter(comparedate).filter(comparecountry)

  tableData.forEach((encounter) => {
           
       //add a row
    var row = tBody.append("tr");
      Object.entries(encounter).forEach(([key, value]) => {

        //add cell
      var cell = tBody.append("td");
      cell.text(value);
    });
  });

      
   
});