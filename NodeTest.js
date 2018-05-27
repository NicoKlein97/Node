"use strict";
const Http = require("http");
const Url = require("url");
var Server;
(function (Server) {
    let counter = 0;
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer();
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    server.listen(port);
    function handleListen() {
        console.log("Ich h�re?");
    }
    function handleRequest(_request, _response) {
        console.log("Ich h�re Stimmen!");
        let query = Url.parse(_request.url, true).query;
        let a = parseInt(query["a"]);
        let b = parseInt(query["b"]);
        let c = parseInt(query["c"]);
        let d = parseInt(query["d"]);
        for (let key in query)
            console.log(query[key]);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("Ich habe dich geh�rt<br/>");
        for (let key in query) {
            counter++;
            _response.write("Zahl " + counter + ": " + (query[key]) + "<br>");
        }
        _response.write("Summe: " + (a + b + c + d) + "<br>");
        _response.write("Differenz: " + (a - b - c - d) + "<br>");
        _response.write("Produkt: " + (a * b * c * d) + "<br>");
        _response.write("Quotient: " + (a / b / c / d) + "<br>");
        _response.end();
    }
})(Server || (Server = {}));
//# sourceMappingURL=NodeTest.js.map