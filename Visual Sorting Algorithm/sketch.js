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

//quickSort with the array to sort and
//the bounds which to perform the quickSort between
async function quickSort(arr, start, end) {
	//checks to see if the boundary in which the sort is performed can exist
	//If not it returns as the sort has finished
  if (start >= end) {
    return;
  }
	//Creates the partition
  let index = await partition(arr, start, end);
  //Starts asynchronous new quicksorts
  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
}

async function partition(arr, start, end) {
  let pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(arr, pivotIndex, end);
  return pivotIndex;
}



async function bubbleSort(arr,arrLength,barPosition){
  //If there is only single element
  //the return the array
  if(arrLength == 1){
    return arr;
  }
  if(barPosition >= arr.length){
    barPosition = 0;
  }
  //Swap the elements by comparing them
  if(arr[barPosition] > arr[barPosition+1]){
    await swap(arr,barPosition,barPosition+1);
  }

  //Recursively call the function to sort.
  await bubbleSort(arr, arrLength-1,barPosition+1);
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

async function swap(arr, a, b) {
  await sleep(50);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
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
