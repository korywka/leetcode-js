function binarySearch(sortedArray, seekElement) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (sortedArray[middleIndex] === seekElement) {
      return middleIndex;
    }
    if (sortedArray[middleIndex] > seekElement) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }

  return -1;
}

function binarySearchFirst(sortedArray, startIndex, endIndex, x) {
  console.log(startIndex, endIndex, x);
  let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

  if ((midIndex === 0 || sortedArray[midIndex - 1] < x) && sortedArray[midIndex] === x) {
    return midIndex;
  }

  if (startIndex <= endIndex) {
    if (x > sortedArray[midIndex]) {
      return binarySearchFirst(sortedArray, midIndex + 1, endIndex, x);
    } else {
      return binarySearchFirst(sortedArray, startIndex, midIndex - 1, x);
    }
  }

  return -1;
}