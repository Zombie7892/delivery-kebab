const React = require("react");
const Layout = require("./Layout");

module.exports = function Description({ seller }) {
  return (
    <>
      <p className="description">
        {" "}
        Сайт delivery-kebab предоставляет готовый канал для продажи
        недоставленных товаров. Периодически возникают ситуации, когда заказчик
        не хочет принимать доставку еды. По регламенту заведения должны выкинуть
        эту еду в мусорку. Но что если нам не придётся переводить продукты?
        Наверняка вокруг много людей, которые с удовольствием бы съели
        недоставленный бургер за половину цены.{" "}
      </p>
      <p className="description">
        В нашем приложении доставщики могут размещать непринятые заказы, а люди
        рядоми выкупать его со скидкой.
      </p>
      <h3>Delivery-kebab сегодня:</h3>
      <h2 id="bigRedText"> от 0 ₽</h2>
      <p className="description">Стоимость подписки нашего сайта</p>
      <h2 id="bigRedText"> 50%</h2>
      <p className="description">Окупаемости товаров</p>
      <h2 id="bigRedText"> от 30 тыс ₽</h2>
      <p className="description">
        Средняя прибыль курьеров на нашем сайте в месяц
      </p>{" "}
      <h2 id="bigRedText"> 100%</h2>
      <p className="description">Довольных клиентов по всему миру</p>
      {seller ? (
        <h3 style={{ fontWeight: "700", color: "black" }}>
          Зарегистрируйтесь как покупатель, чтобы увидеть больше
        </h3>
      ) : (
        <h3 style={{ fontWeight: "700", color: "black" }}>
          Зарегистрируйтесь, чтобы увидеть больше
        </h3>
      )}
    </>
  );
};
