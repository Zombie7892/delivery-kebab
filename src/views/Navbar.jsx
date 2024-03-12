const React = require("react");

function Navbar({ login }) {
  return (
    <div className="navbar">
      <nav className="navStart">
        {login ? (
          <ul className="ulNav">
            <h1 id="navName">Delivery-kebab</h1>
            <li className="navbarLi">
              <a href="/user/logout">Выйти</a>
            </li>{" "}
            <li className="navbarLi">
              <a href="/user/my-orders/">Мои заказы</a>
            </li>
            <li className="navbarLi">
              <a href="/">На главную</a>
            </li>
          </ul>
        ) : (
          <ul className="ulNav">
            <h1 id="navName">Delivery-kebab</h1>
            <li className="navbarLi">
              <a href="/user/register/">Регистрация</a>
            </li>{" "}
            <li className="navbarLi">
              <a href="/user/login">Войти</a>
            </li>
            <li className="navbarLi">
              <a href="/">На главную</a>
            </li>{" "}
          </ul>
        )}
      </nav>
    </div>
  );
}

module.exports = Navbar;
