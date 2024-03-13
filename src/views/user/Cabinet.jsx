const React = require('react');
const Layout = require('../Layout');

module.exports = function Cabinet({
  login, userId, products, orders, seller,
}) {
  return (
    <Layout login={login} seller={seller}>
      <script defer src="/js/deleteProduct.js" />

      <div>
        <div id="marginDiv">
          <h2>
            Пользователь:
            {login}
          </h2>

          <div>
            <a
              href="/product/new"
              type="button"
              className="btn btn-outline-warning"
            >
              Добавить новый заказ
            </a>
            {' '}
          </div>
        </div>
        <div>

          <h3 id="marginH">Добавленные заказы:</h3>
          <div className="catalogCards">
            {products.map((product) => (
              <div className="card" key={product.id} id="styleForCardCabinet">
                {/* <img className="card-img-top" src="#" alt="Фото товара" /> */}
                <div className="card-body" id={`p${product.id}`}>
                  <h3 className="card-title">{product.title}</h3>
                  <h5 className="card-title" id="priceInProduct">
                    {product.firstPrice}
                  </h5>
                  <h5 className="card-title">
                    {product.currentPrice}
                  </h5>
                  {product.userId === userId ? (
                    <button type="button" id={product.id} className="btn btn-outline-danger cardButton delete">
                      удалить
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>

          <h3>Активные заказы:</h3>
          <div className="catalogCards Order">
            {orders.map((order) => (
              <div className="card" key={order.id} id="styleForCardCabinet">
                {/* <img className="card-img-top" src="#" alt="Фото товара" /> */}
                <div className="card-body">
                  <h3 className="card-title">{order.Product.title}</h3>
                  <h6 className="card-title">
                    Заказчик:
                    {' '}
                    {order.User.login}
                  </h6>
                  <h7 className="card-title">
                    {order.User.number}
                  </h7>
                  <a href={`/product/show/${order.id}`}>
                    {' '}
                    <button type="button" className="btn btn-outline-warning">
                      Показать маршрут
                    </button>
                    {' '}
                  </a>
                  <button id={order.id} type="button" className="btn btn-outline-warning delivered">
                    Доставлено
                  </button>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
};
