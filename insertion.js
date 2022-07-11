function insertionSort(arr) {
    let temp = 0;
    for(let i = 1; i < arr.length; i++){
        let x = arr[i];
        j = i-1
        while(j >= 0 && x < arr[j]){
            arr[j + 1] = arr[j]
            j--;
            arr[j+1] = x;
        }

    }
    return arr;

}

console.log(insertionSort([4, 20, 12, 10, 7, 9]))

module.exports = insertionSort;