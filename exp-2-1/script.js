var textInput = document.getElementById("textInput");
var charCount = document.getElementById("charCount");

textInput.addEventListener("input", function () {
    charCount.textContent = textInput.value.length;
});
