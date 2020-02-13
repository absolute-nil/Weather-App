const request = require("request");
module.exports = forecast = (longitude,latitude,callback) =>{
    const weatherUrl ="https://api.darksky.net/forecast/a25b4b523d094ca9e02bcb23c3cfd9a5/"+latitude+","+longitude;

request({ url: weatherUrl, json: true }, (err, {body:{error,daily:{data},currently:{temperature}}}) => {
  if (err) {
    callback("unable to reach darksky",undefined);
  } else if (error) {
    callback("location not found",undefined);
  } else {
    callback(undefined,
        data[0].summary +
        " it is currently " +
        temperature +
        " degree"
    );
  }
});
}