// I think this javascript code is beautiful, "var" is used in this code, however, maybe "let"
//is better, since the code will run on your own folder , so the local var is ok.

var j = 0;
var tag;
var str =
  "<p><span style=' font-size: 60pt;'>Hi I'm Jennifer. I like to code.</span></p>";
var displayText;
var check;

(function write() {
  displayText = str.slice(0, ++j);
  if (displayText === str) {
    return;
  }

  document.getElementById("text").innerHTML = displayText;

  check = displayText.slice(-1);
  if (check === "<") {
    tag = true;
  } else if (check === ">") {
    tag = false;
  }

  if (tag) {
    return write();
  }
  setTimeout(write, 100);
})();
