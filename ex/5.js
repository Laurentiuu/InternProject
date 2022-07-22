function armstrong(nr) {
  let arr = [];
  let string = nr.toString();

  for (var i = 0, len = string.length; i < len; i += 1) {
    arr.push(string.charAt(i));
  }

  const arrOfNum = arr.map((str) => {
    return Number(str);
  });

  console.log("list", arrOfNum);
  console.log("int", nr);
  console.log(arrOfNum[arrOfNum.length - 1]);
  let sum = 0;
  for (let i = 0; i < arrOfNum.length; i++) {
    sum += Math.pow(arrOfNum[i], arrOfNum[arrOfNum.length - 1]);
  }
  if (sum == nr) {
    return true;
  } else {
    return false;
  }
}

console.log(armstrong(153));
