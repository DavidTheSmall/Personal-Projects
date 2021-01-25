async function bogoSort(arr) {
    count = 0;

    for (let i = 0; i < arr.length; i++) {
  		arr[i] = random(height - height/8);

  	}

    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        count+=1;
      }
    }

    if(count == 0){
      return arr;
    }

    await sleep(50);
    await bogoSort(arr);


}
