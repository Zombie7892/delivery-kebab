ymaps.ready(init);

async function init() {
  const response = await fetch('/product/getPositions', {
    method: 'GET',
  });
  const result = await response.json();
  const productInfo = result.products;
  const { userCoords } = result;
  // Создание карты.
  const myMap = new ymaps.Map(
    'map',
    {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [userCoords.latitude, userCoords.longitude],
      controls: [],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 12,
    },
    {
      //   restrictMapArea: true,
    },
  );

  const homePlacemark = new ymaps.Placemark(
    [userCoords.latitude, userCoords.longitude],
    {
      balloonContentHeader: 'Однажды',
      balloonContentBody: 'В студеную зимнюю пору',
      balloonContentFooter: 'Мы пошли в гору',
      hintContent: 'Тут я живу',
    },
    {
      preset: 'islands#redIcon',
    },
  );
  myMap.geoObjects.add(homePlacemark);
  productInfo.map((placemark) => {
    const myPlacemark = new ymaps.Placemark([
      placemark.latitude,
      placemark.longitude,
    ], {
      balloonContentHeader: `${placemark.title}`,
      balloonContentBody: `<img
      src='/assets/img/${placemark.photo}'
      alt="фото продукта"
      height="150"
      class="card-img-top"
    /><h3 class="card-title">${placemark.title}</h3><h5 class="card-title" id="priceInProduct">${placemark.firstPrice}₽</h5><h5 class="card-title">${placemark.currentPrice}₽</h5>`,
      hintContent: `${placemark.title}`,
    });
    myMap.geoObjects.add(myPlacemark);
  });
}
