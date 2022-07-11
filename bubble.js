function bubbleSort(arr) {
    let temp = 0;
    for(let i = 0; i < arr.length; i++){
        let swapped = false;
        for( let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                swapped = true;
                j = 0;
            }

        }
        if(swapped) break;
    }
    return arr;
}

console.log(bubbleSort([2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453,
    546, 4342]))

module.exports = bubbleSort;