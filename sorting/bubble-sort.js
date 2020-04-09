function bubbleSort(arr) {
  const max = arr.length - 1;

  for (let i = 0; i < max; i++) {
    let swap = false;

    for (let j = 0; j < max - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }

    if (!swap) break;
  }

  return arr;
}