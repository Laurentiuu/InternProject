let dataFromFile: any;
import fs from "fs";
// const read = () =>{
//     return new Promise((resolve, reject) =>{
//         fs.readFile('./ganttDiagramData.json', 'utf8', (err: any, data: any) =>{
//             if(err){
//                 //console.log(err);
//                 return reject(err);
//             }
//             const jsonObject = JSON.parse(data);
//             resolve(jsonObject);
//         });
//     });
// }

class Service {
  read() {
    console.log("reading.....");
    dataFromFile = JSON.parse(
      fs.readFileSync("./ganttDiagramData.json", "utf8")
    );
    console.log(dataFromFile);
    return dataFromFile;
  }

  printData() {
    console.log(dataFromFile);
  }

  add(data: any) {
    console.log("writing.....");
    dataFromFile.push(data);
    console.log(dataFromFile);

    fs.writeFile(
      "./results/add.json",
      JSON.stringify(dataFromFile),
      "utf8",
      function (err: any) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("JSON file has been saved.");
      }
    );

    // console.log(JSON.stringify(dataFromFile))
    //let aux = JSON.stringify(dataFromFile)
    //fs.writeFileSync('./ganttDiagramData.json', dataFromFile)
  }

  deleteData(name: string) {
    console.log("deleting....." + name);

    for (let i = 0; i < dataFromFile.length; i++) {
      if (dataFromFile[i].from === name) {
        dataFromFile.splice(i, 1);
      }
    }
    fs.writeFile(
      "./results/delete.json",
      JSON.stringify(dataFromFile),
      "utf8",
      function (err: any) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("JSON file has been saved.");
      }
    );
    console.log(dataFromFile);
  }

  update(name: string, data: any) {
    console.log("updating....." + name);

    for (let i = 0; i < dataFromFile.length; i++) {
      if (dataFromFile[i].from === name) {
        dataFromFile[i] = data;
      }
    }
    fs.writeFile(
      "./results/update.json",
      JSON.stringify(dataFromFile),
      "utf8",
      function (err: any) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("JSON fileF has been saved.");
      }
    );
    console.log(dataFromFile);
  }
}

export { Service };
// module.exports.read = read;
// module.exports.printData = printData;
// module.exports.add = add;
// module.exports.deleteData = deleteData;
// module.exports.update = update;
