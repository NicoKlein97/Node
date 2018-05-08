import * as Http from "http";
import * as Url from "url";

let port: number = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);

//console.log(server);

function handleListen(): void {
    console.log("Ich höre?");
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Ich höre Stimmen!");

    let query: Url.Url = Url.parse(_request.url, true).query;
    console.log(query);


    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write("Ich habe dich gehört");

    /*   for (let key in query)
           _response.write(key + ":" + query[key]);
       _response.write("Das Ergebnis ist: " + (query["a"] + query["b"]));
   */
    _response.end();
}
