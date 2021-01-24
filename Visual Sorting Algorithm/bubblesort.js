
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
