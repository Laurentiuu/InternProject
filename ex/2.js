function mergeObj(obj1, obj2){
  return {...obj1, ...obj2}
}

console.log("initial",{'a': 1, 'b': 2})
console.log("initial", {'c': 3, 'd': 4})

console.log("merged",mergeObj({'a': 1, 'b': 2}, {'c': 3, 'd': 4}))