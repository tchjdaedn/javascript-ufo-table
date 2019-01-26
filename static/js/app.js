// from data.js
var tableData = data;
var tBody = d3.select("tbody");

console.log(tableData);

tableData.forEach((encounter) => {
   console.log(encounter);
    
    //add a row
   var row = tBody.append("tr");
    
    Object.entries(encounter).forEach(([key, value]) => {
     console.log(key, value);
     var cell = tBody.append("td");
     cell.text(value);
   });
 });

var submit = d3.select("#filter-btn");

function comparedate(input) {
  return input.datetime === document.getElementById('datetime').value;
};

submit.on("click", function() {
  d3.event.preventDefault();
  
  //assign input to variable
  var filter = document.getElementById('datetime').value;

  //see what we're getting
  console.log("**************");
  console.log(filter);
  
  d3.select("tbody").html("");


  //clear the table
  d3.select("tbody").html("");

  //rebuild the table
  tableData = data.filter(comparedate)
  //console.log(tableData)

  tableData.forEach((encounter) => {
    //console.log(encounter);
       
       //add a row
    var row = tBody.append("tr");
      Object.entries(encounter).forEach(([key, value]) => {
      console.log(key, value);
      var cell = tBody.append("td");
      cell.text(value);
    });
  });

      
   
});