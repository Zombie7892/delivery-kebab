const logForm = document.querySelector('#loginForm');
const logMsg = document.querySelector('.logMsg');

logForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(logForm);
  const res = Object.fromEntries(data);
  if (!res.email || !res.password) {
    logMsg.innerText = 'Заполните все поля!';
  } else {
    const response = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    const result = await response.json();
    if (result.logDone) {
      logMsg.innerText = `${result.logDone}`;
      logMsg.style.color = 'green';
      setTimeout(() => {
        window.location.href = '/';
      }, 750);
    }
    if (result.err) {
      logMsg.innerText = `${result.err}`;
      logMsg.style.color = 'red';
    }
    if (result.wrongPass) {
      logMsg.innerText = 'Вы ввели неправильный пароль!';
      logMsg.style.color = 'red';
    }
  }
});
