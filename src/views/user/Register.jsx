const React = require("react");

const Layout = require("../Layout");

module.exports = function Register({ login }) {
  return (
    <Layout>
      <div className="styleContainer">
        <div className="container">
          <h3 className="regFormHeader">Регистрация</h3>
          <form id="regForm">
            <label htmlFor="emailInput" className="form-label" />
            <input
              name="email"
              type="text"
              className="form-control"
              autoComplete="off"
              id="emailInput"
              placeholder="Почта*"
            />

            <label htmlFor="loginInput" className="form-label" />
            <input
              name="login"
              type="text"
              className="form-control"
              autoComplete="off"
              id="loginInput"
              placeholder="Имя*"
            />

            <label htmlFor="passwordInput" className="form-label" />
            <input
              name="password"
              type="password"
              className="form-control"
              autoComplete="off"
              id="passwordInput"
              placeholder="Пароль от 4-х символов*"
            />
            <label htmlFor="numberInput" className="form-label">
              Номер телефона:
            </label>
            <input
              name="number"
              type="text"
              className="form-control"
              autoComplete="off"
              id="numberInput"
              placeholder="+7(999) 123-23-23*"
            />

            <select
              className="formSelect"
              aria-label="Default select example"
              name="seller"
            >
              <option selected disabled>
                Выбрать роль
              </option>
              <option value="true">Курьер</option>
              <option value="false">Покупатель</option>
            </select>

            {/* КАРТЫ>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <input type="text" className="mapHeight" name="longitude" style={{ display: 'none' }} />
            <input type="text" className="mapWidth" name="latitude" style={{ display: 'none' }} />
            <p>Укажите на карте метку со своим адресом </p>

            <div
              id="map"
              style={{
                width: '550px',
                height: '300px',
                marginBottom: '10px',
              }}
            />

            <button type="submit" className="btn btn-outline-danger regBtn">
              Зарегистрироваться
            </button>
          </form>

          <h3 className="regMsg"> </h3>
        </div>
      </div>
      <div id="blackBox"></div>
      <script defer src="/js/registration.js" />
    </Layout>
  );
};
