function FancifyText(){
    document.getElementById("textArea").style.fontSize = "24pt";
}

function FancyTextRadio(){
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline"
}

function BoringTextRadio(){
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "";
}

function MooButton(){
    var textArea = document.getElementById("textArea");
    var modifiedText = textArea.value;
    modifiedText = modifiedText.toUpperCase();
    
    var parts = modifiedText.split('.');

    modifiedText = parts.join("-Moo.");

    textArea.value = modifiedText;
}