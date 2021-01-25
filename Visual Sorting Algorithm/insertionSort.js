async function insertionSort(arr){
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            await sleep(50);
        }
        arr[j + 1] = key;
    }
    return arr;
};
