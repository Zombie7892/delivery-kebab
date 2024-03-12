const regForm = document.querySelector('#regForm');
const regMsg = document.querySelector('.regMsg');


regForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(regForm);
  const res = Object.fromEntries(data);
  if (!res.password || !res.email || !res.login ) {
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
