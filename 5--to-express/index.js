const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from home page");
});

app.get("/about", (req, res) => {
  return res.send("Hello from About page " + req.query.name);
});
// ?name= dssdsd

//////////////////////////////////////////////////////////////////

// function myHandler(req, res) {
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
//   const myUrl = url.parse(req.url, true);

//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         if (req.method === "GET") res.end("HOMEPAGE");
//         break;
//       case "/about":
//         const username = myUrl.query.myname;
//         res.end(`Hi, ${username}`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are the results for " + search);
//         break;
//       case "/signup":
//         if (req.method === "GET") res.end("This is a signup form");
//         else if (req.method === "post") {
//           res.end("Success");
//         }
//         break;

//       default:
//         res.end("404 Not Found");
//     }
//   });
// }

// const myServer = http.createServer(myHandler);
/////////////////////////////////////////////////////////////////

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server started"));

app.listen(8000, () => console.log("Server started"));
