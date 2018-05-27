import * as Http from "http";
import * as Url from "url";

namespace Server {
    let counter = 0;
    interface AssocStringString {
        [key: string]: string;
    }

    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    server.listen(port);

    function handleListen(): void {
        console.log("Ich höre?");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Ich höre Stimmen!");

        let query: AssocStringString = Url.parse(_request.url, true).query;
        let a: number = parseInt(query["a"]);
        let b: number = parseInt(query["b"]);
        let c: number = parseInt(query["c"]);
        let d: number = parseInt(query["d"]);


        for (let key in query)
            console.log(query[key]);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write("Ich habe dich gehört<br/>");

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
}