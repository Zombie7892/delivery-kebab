const React = require('react');

const Layout = require('../Layout');

module.exports = function Register({ login }) {
  return (
    <Layout>
      <div className="container">
        <div className="registerBox">
          <form id="regForm">
            <div className="regFormHeader">Регистрация</div>
            <label htmlFor="emailInput" className="form-label">
              Введите ваш адрес электронной почты:
            </label>
            <input
              name="email"
              type="text"
              className="form-control"
              id="emailInput"
              placeholder="Введите действующий e-mail"
            />

            <label htmlFor="loginInput" className="form-label">
              Введите ваш логин/имя пользователя:
            </label>
            <input
              name="login"
              type="text"
              className="form-control"
              id="loginInput"
              placeholder="Введите логин"
            />

            <label htmlFor="passwordInput" className="form-label">
              Придумайте пароль (От 4 символов)
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Введите пароль"
            />
            <label htmlFor="numberInput" className="form-label">
              Введите ваш номер:
            </label>
            <input
              name="number"
              type="text"
              className="form-control"
              id="numberInput"
              placeholder="+7 (999) 123-23-23"
            />

            <select
              className="formSelect"
              aria-label="Default select example"
              name="seller"
            >
              <option selected disabled>
                Укажите роль
              </option>
              <option value="false">Покупатель</option>
              <option value="true">Продавец</option>
            </select>

            <button type="submit" className="regBtn">
              Зарегистрировать аккаунт
            </button>
          </form>

          <h3 className="regMsg"> </h3>
        </div>
      </div>
      <script defer src="/js/registration.js" />
    </Layout>
  );
};