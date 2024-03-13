const React = require("react");

const Layout = require("../Layout");

module.exports = function Login({ login }) {
  return (
    <Layout>
      <div className="styleContainer">
        <div className="container">
          <div className="loginBox">
            <h2 className="loginGreeting regFormHeader">Авторизация</h2>

            <form id="loginForm">
              <label htmlFor="emailInput" className="form-label"></label>
              <input
                name="email"
                type="text"
                className="form-control"
                autoComplete="off"
                id="emailInput"
                placeholder="Почта*"
              />
              <label htmlFor="passwordInput" className="form-label"></label>
              <input
                name="password"
                type="password"
                className="form-control"
                autoComplete="off"
                id="passwordInput"
                placeholder="Пароль*"
              />
            
              <button type="submit" className="btn btn-outline-danger logBtn">
                Войти
              </button>
            </form>

            <h3 className="logMsg"> </h3>
          </div>
        </div>
      </div>
      <div id="blackBox">fdv</div>
      <script defer src="/js/login.js" />
    </Layout>
  );
};
