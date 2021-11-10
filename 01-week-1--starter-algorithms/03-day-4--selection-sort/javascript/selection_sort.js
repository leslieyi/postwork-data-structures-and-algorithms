function selectionSort(arr) {
  // type your code here
  // const swap = (arr, idx1, idx2) =>
  //   ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  // for (let i = 0; i < arr.length; i++) {
  //   let lowest = i;
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[lowest] > arr[j]) {
  //       lowest = j;
  //     }
  //   }
  //   if (i !== lowest) swap(arr, i, lowest);
  // }

  // return arr;

  const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1); //removing that array we just found
  }

  return sorted;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));


  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
