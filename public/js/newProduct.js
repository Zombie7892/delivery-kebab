ymaps.ready(init);
const discount = document.querySelector('#discount');
const firstPriceInput = document.querySelector('#firstPriceInput');

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

discount.addEventListener('input', (e) => {
  if (/[^0-9]/.test(e.target.value)) {
    e.target.value = 50;
  }
  if (e.target.value.length > 3) {
    e.target.value = e.target.value.slice(0, 3);
  }
  if (e.target.value < 0 || e.target.value > 100) {
    e.target.value = 50;
  }
  if (e.target.value.slice(0, 1) === '0') {
    e.target.value = '';
  }
});

firstPriceInput.addEventListener('input', (e) => {
  if (/[^0-9]/.test(e.target.value)) {
    e.target.value = '';
  }
  if (e.target.value.slice(0, 1) === '0') {
    e.target.value = '';
  }
})
