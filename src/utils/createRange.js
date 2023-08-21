export function generateNumberArray(start, end) {
  if (start > end) {
    // Swap the values if start is greater than end
    [start, end] = [end, start];
  }

  const numberArray = [];
  for (let i = start; i <= end; i++) {
    numberArray.push(i);
  }

  return numberArray.length > 15 ? numberArray.splice(0, 15) : numberArray;
}