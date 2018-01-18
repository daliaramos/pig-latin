function piglatin(userInput){
  //if it's not A-Z it's not for me
  if (userInput.match(/[a-z]/i)) {

    //if first letter vowel, add "ay"
    if (userInput.charAt(0) === "a" || userInput.charAt(0) === "e" || userInput.charAt(0) === "i" || userInput.charAt(0) === "o" || userInput.charAt(0) === "u") {
      userInput += "way";
      return userInput;}

    //if first letter consonant, piglatinify it
    else {
      if (userInput.charAt(0) != "a" || userInput.charAt(0) != "e" || userInput.charAt(0) != "i" || userInput.charAt(0) != "o" || userInput.charAt(0) != "u") {
        userInput = userInput.replace(/(\w+?)([aeiou]\w+)/i, '$2$1') + "ay";
        return userInput;
}
      else {
        return userInput;
      }
    }

    //dealing with non-letters
  } else {
      return userInput;
}
};

$(document).ready(function(){
  var newArray = [];
  $("#userInput").submit(function(event){

      //splits input into array via /\b/ regex
      var userInput1 = $("#userInput1").val().toLowerCase().split(/\b/);

      //applies piglatin function to each string in newArray
      for (i=0; i < userInput1.length; i++) {
        newArray.push(piglatin(userInput1[i]));
      }

      //joins newArray into readable text, puts in HTML
      $("#answer").text(newArray.join(""));
      event.preventDefault();
  });
});
