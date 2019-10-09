import mergeSort from '../sort/merge-sort';

test('sort unique values', () => {
  //arrange
  let array = [3, 2, 4, 1, 5, 6, 7, 9, 8];
  //act
  let sorted = mergeSort(array);
  //assert
  expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('sort values with repeated', () => {
  //arrange
  let array = [3, 2, 4, 1, 5, 6, 4, 7, 3, 9, 8];
  //act
  let sorted = mergeSort(array);
  //assert
  expect(sorted).toEqual([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9]);
});
