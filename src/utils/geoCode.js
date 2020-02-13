const request = require("request");

module.exports = geoCode = (address,callback) =>{
    const mapUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoibmlraGlsMTkiLCJhIjoiY2s2YWE1cTA0MG1nNTNkcWp6cDRsM3c0cyJ9.oQ5tr2NoWZauiyFQSzcH-Q&limit=1";
  request({ url: mapUrl, json: true }, (err, {body:{features}}) => {
    if (err) {
      callback("unable to reach mapbox",undefined);
    } else if (features.length === 0) {
      callback({error:"uable to find location. try some other name"},undefined);
    } else {
      callback(undefined,{
        location: features[0].place_name,
        longitude : features[0].center[0],
        latitude: features[0].center[1]
      });
    }
  });
};
