const React = require("react");
const Layout = require("./Layout");
const Product = require("./Product");

module.exports = function Home({ userId, login, products, seller, userCoord }) {
  return (
    <Layout login={login} seller={seller} userId={userId}>
      <script defer src="/js/addOrder.js" />
      <script defer src="/js/apiHome.js" />
      <div id="latitude">{userCoord?.latitude}</div>
      <div id="longitude">{userCoord?.longitude}</div>
      {login ? (
        <>
          <div className="backgroundHomeMenu">
            <img className="advertising" src="/assets/img/mas.jpeg" />
            <div className="centerListMenu">
              {seller ? (
                <>
                  <div className="centerListSeller">
                 
                      <p className="description">
                        {" "}
                        Сайт delivery-kebab предоставляет готовый канал для
                        продажи недоставленных товаров. Периодически возникают
                        ситуации, когда заказчик не хочет принимать доставку
                        еды. По регламенту заведения должны выкинуть эту еду в
                        мусорку. Но что если нам не придётся переводить
                        продукты? Наверняка вокруг много людей, которые с
                        удовольствием бы съели недоставленный бургер за половину
                        цены.{" "}
                      </p>
                      <p className="description">
                        В нашем приложении доставщики могут размещать непринятые
                        заказы, а люди рядоми выкупать его со скидкой.
                      </p>
                      <h3>Delivery-kebab сегодня:</h3>
                      <h2 id="bigRedText"> от 0 ₽</h2>
                      <p className="description">
                        Стоимость подписки нашего сайта
                      </p>
                      <h2 id="bigRedText"> 50%</h2>
                      <p className="description">Окупаемости товаров</p>
                      <h2 id="bigRedText"> от 30 тыс ₽</h2>
                      <p className="description">
                        Средняя прибыль курьеров на нашем сайте в месяц
                      </p>{" "}
                      <h2 id="bigRedText"> 100%</h2>
                      <p className="description">
                        Довольных клиентов по всему миру
                      </p>
                      <h3 style={{ fontWeight: "700", color: "black" }}>
                        Зарегистрируйтесь как покупатель, чтобы увидеть больше
                      </h3>
                
                  </div>
                </>
              ) : (
                <>
                  <div id="map" />
                  <div className="catalogCards">
                    {products.reverse().map((product) => (
                      <Product key={product.id} product={product} />
                    ))}
                  </div>{" "}
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="backgroundHome">
            <img className="advertising" src="/assets/img/mas.jpeg" />

            <div className="centerList">
              <p className="description">
                {" "}
                Сайт delivery-kebab предоставляет готовый канал для продажи
                недоставленных товаров. Периодически возникают ситуации, когда
                заказчик не хочет принимать доставку еды. По регламенту
                заведения должны выкинуть эту еду в мусорку. Но что если нам не
                придётся переводить продукты? Наверняка вокруг много людей,
                которые с удовольствием бы съели недоставленный бургер за
                половину цены.{" "}
              </p>
              <p className="description">
                В нашем приложении доставщики могут размещать непринятые заказы,
                а люди рядоми выкупать его со скидкой.
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
              <h3 style={{ fontWeight: "700", color: "black" }}>
                Зарегистрируйтесь, чтобы увидеть больше
              </h3>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};
