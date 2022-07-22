function sortPopulation(objects) {
  return objects.sort((a, b) => {
    return a.size - b.size;
  });
}

console.log("unsorted list", [{ size: 20 }, { size: 10 }, { size: 30 }]);
console.log("sorted list", sortPopulation([{ size: 20 }, { size: 10 }, { size: 30 }]));
