ymaps.ready(mapRender);
function mapRender(latitude1, longitude1, latitude2, longitude2) {
  const myMap = new ymaps.Map('myMap', {
    center: [latitude1, longitude1],
    zoom: 10,
  });

  const route = ymaps.route([
    [latitude1, longitude1],
    [latitude2, longitude2],
  ]).then(
    (route) => {
      myMap.geoObjects.add(route);

      const routeLength = route.getLength(); // Длина маршрута

      const routeTime = route.getTime();
      const routeTimeWithJams = route.getJamsTime(); //! с пробками

      console.log(routeLength / 1000);
      console.log(routeTime / 60);
      console.log(routeTimeWithJams / 60);
    },
    (error) => {
      alert(`Возникла ошибка: ${error.message}`);
    },
  );
}

mapRender(55.556164, 37.699218, 55.685168, 37.532616);
module.exports = mapRender;

// ymaps.ready(init);
// function init() {
//   // var myMap = new ymaps.Map('myMap', {
//   //   center: [55.685168, 37.532616],
//   //   zoom: 10
//   // });

//   let route = ymaps.route([
//     [55.556164, 37.699218],
//     [55.685168, 37.532616]
//   ]).then(
//     function (route) {
//       // myMap.geoObjects.add(route);

//       var routeLength = route.getLength(); // Длина маршрута
      
//       var routeTime = route.getTime();
//       var routeTimeWithJams = route.getJamsTime(); //! с пробками

//       console.log(routeLength / 1000)
//       console.log(routeTime / 60)
//       console.log(routeTimeWithJams / 60)

//     },
//     function (error) {
//       alert("Возникла ошибка: " + error.message);
//     },
//   );
// }
