function groupStrings(arr) {
  let resultObj = {};
  for (let i =0; i < arr.length; i++) {
    let current = arr[i];
    let firstChar = current[0].toLowerCase();
    let arr1 = [];
    if (resultObj[firstChar] === undefined) {
      arr1.push(current);
      resultObj[firstChar] = arr1
    }else {
      resultObj[firstChar].push(current)
    }
  }
  return resultObj
}

console.log("result", groupStrings(["Alf", "Alice", "Ben"]));
