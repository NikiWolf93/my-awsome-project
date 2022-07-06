let now = new Date();
now.getDate();
let h5 = document.querySelector("#time");
h5.innerHTML = now;

function submit(event) {
  event.preventDefault();
  let change = document.querySelector("#change");
  let cityInput = document.querySelector("#city-input");

  change.innerHTML = cityInput.value;
}

let button = document.querySelector("#search");
button.addEventListener("click", submit);

function showTemp() {
  let span = document.querySelector("#temp");
  span.innerHTML = "16 °C";
}
let units = document.querySelector("#celsius-link");
units.addEventListener("click", showTemp);

function showTemp2() {
  let span = document.querySelector("#temp");
  span.innerHTML = "61 °F";
}
let units2 = document.querySelector("#farenheit-link");
units2.addEventListener("click", showTemp2);
