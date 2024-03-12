const React = require('react');

function Navbar({ login }) {
  return (
    <div className="navbar">
      {login ? (
        <nav className="navBtns">
          <button type="submit" className="navBtn">
            <a href="/" className="navLink">На главную</a>
          </button>
          <button type="submit" className="navBtn">
            <a href="/user/my-orders/" className="navLink">Мои заказы</a>
          </button>
          <button type="submit" className="navBtn">
            <a href="/user/logout" className="navLink">Выйти</a>
          </button>
        </nav>
      ) : (
        <nav className="navBtns">
          <button type="submit" className="navBtn">
            <a href="/" className="navLink">На главную</a>
          </button>
          <button type="submit" className="navBtn">
            <a href="/user/register/" className="navLink">Регистрация</a>
          </button>
          <button type="submit" className="navBtn">
            <a href="/user/login" className="navLink">Авторизоваться</a>
          </button>
        </nav>
      )}
    </div>
  );
}

module.exports = Navbar;
