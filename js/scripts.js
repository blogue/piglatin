var sentenceSplitter = function(sentence) {
    var piglatinSentence = [];
    var sentenceSplit = sentence.split(" ");
    var loopLimit = sentenceSplit.length;
    for (i = 0; i < loopLimit; i += 1) {
        if (!sentenceSplit[i]) { continue; } // Catch the case of '' (empty string) resulting from two consecutive spaces in user input
        piglatinSentence.push(evaluateText(sentenceSplit[i]));
    }
    return piglatinSentence.join(' ');
};

var evaluateText = function(input) {
    var inputArr = input.split(""),
        vowels = ['a', 'e', 'i', 'o', 'u'],
        len = inputArr.length,
        lastLetter = '',
        output, i;
  for (i = 0; i < len; i++) {
    if (vowels.indexOf(inputArr[0]) !== -1 && !(lastLetter === 'q' && inputArr[0] === 'u')) { break; }
    lastLetter = inputArr.shift();
    inputArr.push(lastLetter);
  }

    inputArr.push('ay');
    output = inputArr.join('');
    console.log('Word \'' + input + '\' => \'' + output + '\'');
    return output;
};

$(document).ready(function() {
  $("#userInput").submit(function(event){
    var sentenceToTranslate = $("#userSentence").val().toLowerCase();
    $(".output h1").text(sentenceSplitter(sentenceToTranslate));
    event.preventDefault();
  });
});
