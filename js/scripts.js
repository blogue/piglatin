var evaluateText = function(input) {
  inputArr = input.split(" ");

  return inputArr;
};



$(document).ready(function() {
  $("#userInput").submit(function(event){
    var sentenceToTranslate = $("#userSentence").val();


    // $(".output").append(evaluateText(sentenceToTranslate));
    console.log(evaluateText(sentenceToTranslate));
    event.preventDefault();
  });
});
