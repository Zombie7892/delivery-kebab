function timeFromDistance(distance, speed, distanceTimeFactor, dayPeriodFactor) {
  const time = distance / speed;
  return time * 60 * distanceTimeFactor * dayPeriodFactor;
}

module.exports = timeFromDistance;

// console.log(timeFromDistance(10, 20, 2, 1.5));
