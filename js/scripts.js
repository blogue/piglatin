var sentenceSplitter = function(sentence) {
    // debugger;
    var piglatinSentence = [];
    var sentenceSplit = sentence.split(" ");
    for (i = 0; i <= sentenceSplit.length; i += 1) {
      // evaluateText(sentenceSplit[i]);
      piglatinSentence.push(evaluateText(sentenceSplit[i]));

    }
    console.log(piglatinSentence);
}


var evaluateText = function(input) {
  inputArr = input.split("");

  if (inputArr[0] === "q" && inputArr[1] === "u") {
    inputArr.splice(0, 2);
    inputArr.push("qu");
    inputArr.push("ay")
    return inputArr;

  }
  if (inputArr[0] !== "a" && inputArr[0] !== "e" && inputArr[0] !== "i" && inputArr[0] !== "o" && inputArr[0] !== "u" &&  inputArr.length <= 3 ) {
    inputArr.push(inputArr.shift());
    inputArr.push('ay');
    return inputArr;
  }
  if (inputArr[0] === "a" || inputArr[0] === "e" || inputArr[0] === "i" || inputArr[0] === "o" || inputArr[0] === "u") {
    inputArr.push('ay')
    return inputArr;
    }

  for (i=0; i<=1; i++) {

   if (inputArr[0] !== "a" && inputArr[0] !== "e" && inputArr[0] !== "i" && inputArr[0] !== "o" && inputArr[0] !== "u") {
     inputArr.push(inputArr.shift());
   }
 }
  inputArr.push('ay');
  console.log(inputArr)
  return inputArr;
};



$(document).ready(function() {
  $("#userInput").submit(function(event){
    var sentenceToTranslate = $("#userSentence").val();


    // $(".output").append(evaluateText(sentenceToTranslate));
    console.log(sentenceSplitter(sentenceToTranslate));
    event.preventDefault();
  });
});
