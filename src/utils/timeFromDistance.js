module.exports = function timeFromDistance(distance, speed) {
  const time = distance / speed;
  return time * 60;
}

// console.log(timeFromDistance(1.5, 20));
