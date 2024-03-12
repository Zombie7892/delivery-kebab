function timeFromDistance(distance, speed = 20) {
  const time = distance / speed;
  return time * 60;
}

console.log(timeFromDistance(1.5, 20));
