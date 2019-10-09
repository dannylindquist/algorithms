export default function mergeSort<T>(list: Array<T>): Array<T> {
  if (list.length == 1) {
    return list;
  }
  let middle = list.length / 2;
  let first: Array<T> = [];
  let second: Array<T> = [];
  for (let i = 0; i < list.length; i++) {
    (i < middle ? first : second).push(list[i]);
  }
  let left = mergeSort(first);
  let right = mergeSort(second);
  return mergeLists(left, right);
}

function mergeLists<T>(first: Array<T>, second: Array<T>) {
  let index1 = 0,
    index2 = 0;
  let combined = [];
  while (index1 < first.length || index2 < second.length) {
    if (index1 < first.length && index2 < second.length) {
      let val1 = first[index1],
        val2 = second[index2];
      if (val1 > val2) combined.push(second[index2++]);
      else if (val2 > val1) combined.push(first[index1++]);
      else if (val2 === val1) {
        combined.push(first[index1++], second[index2++]);
      }
    } else if (index1 < first.length && index2 >= second.length) {
      combined.push(first[index1++]);
    } else if (index1 >= first.length && index2 < second.length) {
      combined.push(second[index2++]);
    }
  }
  return combined;
}
