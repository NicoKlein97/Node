
//let test = document.getElementsByTagName("body")[0];
window.addEventListener("load", init);
let address: string = "http://localhost:8100";

let input: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");


function init(_event: Event): void {
    console.log("Init");
    let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
    let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
    let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkSearch");
    insertButton.addEventListener("click", insert);
    refreshButton.addEventListener("click", refresh);
    searchButton.addEventListener("click", search);
}

function insert(_event: Event): void {

    let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
    let matrikel: string = input[2].value;
    let student: Student;
    student = {

        firstname: input[0].value,
        name: input[1].value,
        studiengang: document.getElementsByTagName("select").item(0).value,
        age: parseInt(input[3].value),
        gender: genderButton.checked,
        matrikel: parseInt(matrikel),

    };


    let convert: string = JSON.stringify(student);
    console.log(convert);


    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET", address + "?command=insert&data=" + convert, true);
    xhr.addEventListener("readystatechange", handleStateChangeInsert);
    xhr.send();
}

function handleStateChangeInsert(_event: ProgressEvent): void {
    var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.response);
    }
}


function refresh(_event: Event): void {
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET", address + "?command=refresh", true);
    xhr.addEventListener("readystatechange", handleStateChangeRefresh);
    xhr.send();
}

function handleStateChangeRefresh(_event: ProgressEvent): void {
    let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
    output.value = "";
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        output.value += xhr.response;
    }
}

function search(_event: Event): void {
    let mNumber: string = input[6].value;

    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET", address + "?command=search&searchFor=" + mNumber, true);
    xhr.addEventListener("readystatechange", handleStateChangeSearch);
    xhr.send();
}

function handleStateChangeSearch(_event: ProgressEvent): void {
    let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
    output.value = "";
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        output.value += xhr.response;
    }
}



