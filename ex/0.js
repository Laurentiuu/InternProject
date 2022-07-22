async function getData() {
  let data = await fetch("https://stats.nba.com/stats/allstarballotpredictor");
  return data;
}

getData().then((data) => console.log(data));
