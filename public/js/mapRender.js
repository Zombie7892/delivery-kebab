const distanceRoute = document.querySelector('#distanceRoute');
const timeRoute = document.querySelector('#timeRoute');
const timeWithJamsRoute = document.querySelector('#timeWithJamsRoute');

ymaps.ready(init);
async function init() {
  const response = await fetch('/product/getRoute', {
    method: 'GET',
  });
  const result = await response.json();
  const productInfo = result.order;
  const myMap = new ymaps.Map('routeMap', {
    center: [productInfo['Product.latitude'], productInfo['Product.longitude']],
    zoom: 10,
  });

  const route = ymaps.route([
    [productInfo['Product.latitude'], productInfo['Product.longitude']],
    [productInfo['User.latitude'], productInfo['User.longitude']],
  ]).then(
    (route) => {
      myMap.geoObjects.add(route);

      const routeLength = route.getLength(); // Длина маршрута

      const routeTime = route.getTime();
      const routeTimeWithJams = route.getJamsTime(); //! с пробками

      distanceRoute.innerText = `Расстояние до заказчика: ${(routeLength / 1000).toFixed(1)} км.`;
      timeRoute.innerText = `Время до заказчика без пробок: ${(routeTime / 60).toFixed(1)} мин.`;
      timeWithJamsRoute.innerText = `Время в пути с пробками: ${(routeTimeWithJams / 60).toFixed(1)}  мин.`;
    },
    (error) => {
      alert(`Возникла ошибка: ${error.message}`);
    },
  );
}
