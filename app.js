var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(input) {
    // return url + "?" + "text=" + input;
    return url + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured",error);
    alert("something wrong try after sometime !")
}

function clickHandler() {
    var inputText = txtInput.value; //here we take input

    // console.log(inputText);

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; // setting output text to output div
    }).catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);