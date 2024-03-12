const timeFromDistance = require('./timeFromDistance');

function calcCrow(lat1, lon1, lat2, lon2, speed = 20) {
  function toRad(Value) {
    return Value * Math.PI / 180;
  }
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return {
    distance: d.toFixed(1),
    time: timeFromDistance(d, speed).toFixed(0),
  };
};

module.exports = calcCrow;

// console.log(calcCrow(55.717359, 37.895778, 55.72397, 37.575452, 30));
