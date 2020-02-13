console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector("#messageOne");
const messageTwo = document.querySelector("#messageTwo");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = searchElement.value;
  messageOne.textContent = "loading ...";
  messageTwo.textContent = '';
  fetch("http://localhost:3000/weather?address=" + location).then(response => {
    response.json().then(data => {
      console.log(data);
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = "location: " + data.location;
        messageTwo.textContent = "forecast: " + data.forecastData;
      }
    });
  });
});
