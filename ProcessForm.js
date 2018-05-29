//let test = document.getElementsByTagName("body")[0];
window.addEventListener("load", init);
let address = "http://localhost:8100";
let input = document.getElementsByTagName("input");
function init(_event) {
    console.log("Init");
    let insertButton = document.getElementById("insert");
    let refreshButton = document.getElementById("refresh");
    let searchButton = document.getElementById("checkSearch");
    insertButton.addEventListener("click", insert);
    refreshButton.addEventListener("click", refresh);
    searchButton.addEventListener("click", search);
}
function insert(_event) {
    let genderButton = document.getElementById("male");
    let matrikel = input[2].value;
    let student;
    student = {
        firstname: input[0].value,
        name: input[1].value,
        studiengang: document.getElementsByTagName("select").item(0).value,
        age: parseInt(input[3].value),
        gender: genderButton.checked,
        matrikel: parseInt(matrikel),
    };
    let convert = JSON.stringify(student);
    console.log(convert);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", address + "?command=insert&data=" + convert, true);
    xhr.addEventListener("readystatechange", handleStateChangeInsert);
    xhr.send();
}
function handleStateChangeInsert(_event) {
    var xhr = _event.target;
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.response);
    }
}
function refresh(_event) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", address + "?command=refresh", true);
    xhr.addEventListener("readystatechange", handleStateChangeRefresh);
    xhr.send();
}
function handleStateChangeRefresh(_event) {
    let output = document.getElementsByTagName("textarea")[0];
    output.value = "";
    let xhr = _event.target;
    if (xhr.readyState == XMLHttpRequest.DONE) {
        output.value += xhr.response;
    }
}
function search(_event) {
    let mNumber = input[6].value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", address + "?command=search&searchFor=" + mNumber, true);
    xhr.addEventListener("readystatechange", handleStateChangeSearch);
    xhr.send();
}
function handleStateChangeSearch(_event) {
    let output = document.getElementsByTagName("textarea")[1];
    output.value = "";
    let xhr = _event.target;
    if (xhr.readyState == XMLHttpRequest.DONE) {
        output.value += xhr.response;
    }
}
//# sourceMappingURL=ProcessForm.js.map