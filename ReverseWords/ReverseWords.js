function spinWords() {
    let result = document.getElementById("result");
    const rev=document.getElementById("text").value
    var sentence = "";
    var separate = rev.split(" ");
    
    for (var i = 0; i < separate.length; i++) {
      if (sentence) sentence += ' ';
      if (separate[i].length >= 5) {
        sentence += separate[i].split("").reverse().join("");
      } else {
        sentence += separate[i];
      }
    }
    result.innerHTML="The reversed string with given condition is:" + sentence;
  }