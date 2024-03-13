ymaps.ready(init);

async function init() {
  // Создание карты.
  const myMap = new ymaps.Map(
    'map',
    {
      center: [55.76, 37.64],
      controls: [],
      zoom: 14,
    },
    {},
  );

  const searchControl = new ymaps.control.SearchControl({
    options: {
      provider: 'yandex#search',
      noPopup: true,
      noSuggestPanel: true,
    },
  });

  myMap.controls.add(searchControl);

  // Создание метки
  const initialCoords = myMap.getCenter();
  const placemark = new ymaps.Placemark(initialCoords, {
    hintContent: 'Метка',
  }, {
    draggable: true,
  });

  // Добавление метки на карту
  myMap.geoObjects.add(placemark);

  function updateInputCoords(coords) {
    const input = document.querySelector('.mapHeight');
    const input1 = document.querySelector('.mapWidth');

    input.value = coords[1].toFixed(6);
    input1.value = coords[0].toFixed(6);

    console.log(input.value, input1.value);
  }

  // Обработчик события перемещения метки
  placemark.events.add('dragend', (e) => {
    const newCoords = e.get('target').geometry.getCoordinates();
    console.log(newCoords);
    updateInputCoords(newCoords);
  });

  // Обработчик события клика на карту
  myMap.events.add('click', (e) => {
    const coords = e.get('coords');

    // Удаление предыдущей метки (если есть)
    myMap.geoObjects.removeAll();

    // Создание новой метки
    const newPlacemark = new ymaps.Placemark(coords, {
      hintContent: 'Новая метка',
    }, {
      draggable: true,
    });

    // Добавление новой метки на карту
    myMap.geoObjects.add(newPlacemark);

    // Обработчик события перемещения новой метки
    newPlacemark.events.add('dragend', (e) => {
      const newCoords = e.get('target').geometry.getCoordinates();
      console.log(newCoords);
      updateInputCoords(newCoords);
    });

    // Обновление инпутов при клике
    updateInputCoords(coords);
  });
}