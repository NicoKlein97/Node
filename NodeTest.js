"use strict";
const Http = require("http");
const Url = require("url");
let port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
//console.log(server);
function handleListen() {
    console.log("Ich höre?");
}
function handleRequest(_request, _response) {
    console.log("Ich höre Stimmen!");
    let query = Url.parse(_request.url, true).query;
    console.log(query);
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write("Ich habe dich gehört");
    /*   for (let key in query)
           _response.write(key + ":" + query[key]);
       _response.write("Das Ergebnis ist: " + (query["a"] + query["b"]));
   */
    _response.end();
}
//# sourceMappingURL=NodeTest.js.map