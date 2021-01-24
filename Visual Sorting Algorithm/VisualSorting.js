let values = [];
let barWidth = 10;
let sorting = false;
let barCount = 200;
let sortType = 0;
let barPosition = 0;
var NumberOfBars = 0;

//Sets up random values of the collumns
function setup() {
	//Creates a canvas
  createCanvas(windowWidth, windowHeight);
	//Set up User Interface
  var settings = QuickSettings.create(20, 20, "Settings");
  settings.addDropDown("Type of Sort",["quicksort","bubblesort"],function() {
    sortType = settings.getValue("Type of Sort").index;
  });

  settings.addRange("Number of Bars", 1, barCount, NumberOfBars, 1, function(value) {
		NumberOfBars = value;
	});
  settings.addButton("Sort", function() {
    sorting = true;
  });
}

function draw() {
	background(0);
	if(sorting){
		beginSort();
		sorting = false;
	}
	else{
		for (let i = 0; i < values.length; i++) {
			strokeWeight(1);
			stroke(51);
	    rect(i * barWidth, height - values[i], barWidth, values[i]);
	  }
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function beginSort(){
	barWidth = windowWidth/NumberOfBars;
	//Creates the array with size of the width of the canvas
	//divided by the collumn width
	values = new Array(floor(NumberOfBars));
	//Randomly generates the collumns heights and puts them into the array
	for (let i = 0; i < values.length; i++) {
		values[i] = random(height - height/8);

	}
	//Starts the quicksort giving it the array
  if(sortType == 0)
	 quickSort(values, 0, values.length - 1);
  else if(sortType == 1)
    bubbleSort(values,values.length*NumberOfBars,barPosition);

}
