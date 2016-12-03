var sliderEl = document.getElementById('slider');
var sliderOutputEl = document.getElementById('slider_output');

var changeOutput = function() {
  sliderOutputEl.value = sliderEl.value;
}


sliderEl.addEventListener("input", changeOutput);
