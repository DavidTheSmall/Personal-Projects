
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
