function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const less = [];
  const equal = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else if (arr[i] === pivot) {
      equal.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  const sortedLess = quicksort(less);
  const sortedGreater = quicksort(greater);

  return sortedLess.concat(equal, sortedGreater);
}

// Example usage:
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = quicksort(unsortedArray.slice()); // Create a copy to avoid mutating the original array
console.log(sortedArray);




function inPlaceQuickSort (arr, low = 0, high = arr.length -1){
  if(low < high){
    const partitionIndex = partition(arr,low,high)

    inPlaceQuickSort(arr,low, partitionIndex -1)
    inPlaceQuickSort(arr,partitionIndex +1 ,high)

    
  }
  return arr;
}

function partition (arr, low, high){
  const pivot = arr[high];
  let i = low -1


  for(let j = low; j < high; j++){
    if(arr[j] < pivot){
      i++;
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
  }
  [arr[i+1],arr[high]] = [arr[high],arr[i+1]]
  return i+1;
}

const unsortedArrayInPlace = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArrayInPlace = inPlaceQuickSort(unsortedArrayInPlace); // Create a copy to avoid mutating the original array
console.log(sortedArrayInPlace);
console.log(unsortedArrayInPlace);

module.exports = [quicksort];
