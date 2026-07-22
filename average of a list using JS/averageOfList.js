const averageOfList = (numbers) => {
  if (!numbers || numbers.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
};

console.log(averageOfList([10, 20, 30, 40])); // Output: 25
console.log(averageOfList([5, 15]));          // Output: 10
console.log(averageOfList([]));               // Output: 0