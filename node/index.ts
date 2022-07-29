import express from "express";
import bodyParser from "body-parser";

import {Service} from "./controller/crud";

const app = express();
const PORT = 3000;
const router = express.Router();

const crud = new Service();

crud.read();

app.get("/getFile", function (request: any, response: any) {
  response.send(crud.read());
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/post", (request: any, response: any) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  // console.log(typeof(request.body))
  crud.add(request.body);

  response.send("Succes adding");
});

router.delete("/delete", (request: any, response: any) => {
  const from = request.query.from;
  console.log(from);

  crud.deleteData(from);

  response.send("Succes Deleting");
});

router.put("/put", (request: any, response: any) => {
  const reqBody = request.body;

  crud.update(request.query.from, reqBody);

  response.send("Succes Putting");
});

// add router in the Express app.
app.use("/", router);

// crud.read();
// crud.printData();

// crud.add({
//       from: "Asd",
//       date: "2019-06-11T14:49:15.000Z",
//       to: [
//         "Dsa"
//       ]});
// crud.update('Asd', {
//     from: "Eu",
//     date: "21/22",
//     to: ["Tu"]
// });
// crud.deleteData('Eu');
