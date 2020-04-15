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
  let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

  if (sortedArray[middleIndex] === x && (middleIndex === 0 || sortedArray[middleIndex - 1] < x)) {
    return middleIndex;
  }

  if (startIndex <= endIndex) {
    if (x > sortedArray[middleIndex]) {
      return binarySearchFirst(sortedArray, middleIndex + 1, endIndex, x);
    } else {
      return binarySearchFirst(sortedArray, startIndex, middleIndex - 1, x);
    }
  }

  return -1;
}

function binarySearchLast(sortedArray, startIndex, endIndex, x) {
  let middleIndex = startIndex + Math.floor(((endIndex - startIndex) / 2));

  if (sortedArray[middleIndex] === x && (middleIndex === sortedArray.length - 1 || sortedArray[middleIndex + 1] > x)) {
    return middleIndex;
  }

  if (startIndex <= endIndex) {
    if (x >= sortedArray[middleIndex]) {
      return binarySearchLast(sortedArray, middleIndex + 1, endIndex, x);
    } else {
      return binarySearchLast(sortedArray, startIndex, middleIndex - 1, x);
    }
  }

  return -1;
}