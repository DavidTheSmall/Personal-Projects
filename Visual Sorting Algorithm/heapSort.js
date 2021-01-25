var array_length;
async function heapSort(arr) {
  array_length = arr.length;

  for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
      await heap_root(arr, i);
    }

  for (i = arr.length - 1; i > 0; i--) {
      await swap(arr, 0, i);
      array_length--;
      await heap_root(arr, 0);
  }
}


async function heap_root(arr, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < array_length && arr[left] > arr[max]) {
      max = left;
  }

  if (right < array_length && arr[right] > arr[max])     {
      max = right;
  }

  if (max != i) {
      await swap(arr, i, max);
      await heap_root(arr, max);
  }
}
