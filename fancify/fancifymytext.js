function makeBigger() {
    document.getElementById("textinput").style.fontSize = "24pt";
}

function useStyles() {
    var textArea = document.getElementById("textinput");
    var fancyText = document.getElementById("fancy").checked;
    if (fancyText) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function applyMoo() {
    var textArea = document.getElementById("textinput");
    var upperText = textArea.value.toUpperCase();
    var sentences = upperText.split(".");
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    textArea.value = sentences.join(". ");
}
