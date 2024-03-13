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

  let distanceTimeFactor = 1.3;
  if (d >= 0 && d <= 5) {
    distanceTimeFactor = 1.6;
  }
  if (d > 5 && d <= 7) {
    distanceTimeFactor = 1.5;
  }
  if (d > 7 && d <= 10) {
    distanceTimeFactor = 1.5;
  }
  if (d > 10 && d <= 15) {
    distanceTimeFactor = 1.4;
  }
  if (d > 15 && d <= 20) {
    distanceTimeFactor = 1.4;
  }
  if (d > 20 && d <= 30) {
    distanceTimeFactor = 1.2;
  }
  if (d > 30) {
    distanceTimeFactor = 1.2;
  }

  let dayPeriodFactor = 1;
  if (new Date().getHours() >= 6 && new Date().getHours() < 12) {
    dayPeriodFactor = 1.2;
  }
  if (new Date().getHours() >= 17 && new Date().getHours() < 20) {
    dayPeriodFactor = 1.2;
  }

  const time = timeFromDistance(d, speed, distanceTimeFactor, dayPeriodFactor).toFixed();

  const timeHours = Math.floor(time / 60);
  const timeMinutes = time % 60;

  return {
    distance: d.toFixed(1),
    timeHours,
    timeMinutes,
    time,
  };
}

module.exports = calcCrow;

// console.log(calcCrow(55.717312, 37.895771, 55.727343, 37.649469, 30));
