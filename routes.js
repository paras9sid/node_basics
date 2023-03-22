const fs = require("fs");

// function requestHandler()
//es6 arrow function
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  //route creation
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button>Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    //get req data -data event
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk); //push method change body object - inserting new element bin body array
    });
    req.on("end", () => {
      //end event
      //buffer the chunks --event listener
      const parsedBody = Buffer.concat(body).toString();
      //   console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      //   fs.writeFileSync("message.txt", message); //will create file in the same folder fSync = synchronous
      //takes 3 args
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from node.js server!</h1></body>");
  res.write("</html>");
  res.end();
};
//exporting module methods
// module.exports = requestHandler;

//other method od exporting -- object form exporting multiple properties
// module.exports = {
//   handler: requestHandler,
//   someText: "some hard coded text",
// };

//above mthod can be re written as
// module.exports.handler = requestHandler;
// module.exports.someText = "some hard coded text";

//shortcut of exporting supported by nodejs
exports.handler = requestHandler;
exports.someText = "new way";
