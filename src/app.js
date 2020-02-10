// const geoCode = require("./utils/geoCode");
// const forecast = require("./utils/forecast");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const PartialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(publicDirectoryPath));
hbs.registerPartials(PartialsPath);

// let weather = {
//   location: "",
//   forecastData: ""
// };

// geoCode("mumbai", (err, { location, longitude, latitude }) => {
//   if (err) {
//     console.log("err", err);
//   }
//   forecast(longitude, latitude, (err, forecastData) => {
//     weather = {
//       location,
//       forecastData
//     };
//   });
// });

app.get("/", (req, res) => {
  res.render('index',{
      title: 'Weather',
      name: 'Nikhil Sharma'
  })
});

app.get("/about", (req, res) => {
  res.render('about',{
    title: 'About',
    name: 'Nikhil Sharma'
  });
});

app.get("/help", (req, res) => {
    res.render('help',{
        helpText: 'i am here to help',
        title: 'Help',
        name: 'Nikhil Sharma'
    });
  });

app.get("/weather", (req, res) => {
  res.send({
    forecast: 'it is snowing',
    location: 'mmbai'
  }
  );
});

app.listen(3000, () => {
  console.log("started listening on port 3000");
});

