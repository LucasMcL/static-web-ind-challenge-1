// Challenge #1

// Create a form that has a range input, and a number input,
//both with the same values for min, max, and default.
//When the user changes the value on the range input,
//the value of the number input should match.
//The opposite should be true.
//The values of the two inputs should always be synchronized.

var sliderEl = document.getElementById('slider');
var numberEl = document.getElementById('number');


var changeSlider = function() {
  sliderEl.value = numberEl.value;
}

var changeNumber = function() {
  numberEl.value = sliderEl.value;
}

sliderEl.addEventListener("input", changeNumber);
numberEl.addEventListener("input", changeSlider);
