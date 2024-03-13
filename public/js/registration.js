const regForm = document.querySelector('#regForm');
const regMsg = document.querySelector('.regMsg');

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

const formNumber = (number) => {
  const phoneReg = /(\+7|8)\D*(\d{3})\D*(\d{3})\D*(\d{2})\D*(\d{2})/gi;
  if (number.match(phoneReg)) {
    return number.replace(phoneReg, (match, g1, g2, g3, g4, g5) => `+7 (${g2}) ${g3}-${g4}-${g5}`);
  }
  regMsg.innerText = 'Введите номер корректно';
  regMsg.style.color = 'red';
  setTimeout(() => {
    regMsg.innerText = '';
  }, 800);
};

regForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(regForm);
  const res = Object.fromEntries(data);
  res.number = formNumber(res.number);

  console.log(res);

  if (!res.password || !res.email || !res.login) {
    regMsg.innerText = 'Заполните все поля!';
  } else {
    const response = await fetch('/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    const result = await response.json();
    if (result.success) {
      regMsg.innerText = `Пользователь  с адресом ${res.email} успешно зарегистрирован!`;
      regMsg.style.color = 'green';
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    }
    if (result.err) {
      console.log(result.err);
      regMsg.innerText = `${result}`;
      regMsg.style.color = 'crimson';
    }
  }
});
