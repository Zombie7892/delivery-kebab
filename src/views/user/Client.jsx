const React = require('react');
const Layout = require('../Layout');

module.exports = function Client({ login, orders }) {
  return (
    <Layout login={login}>
      <script defer src="/js/deleteOrder.js" />

      <div>
        <div id="marginDiv">
          <h2>
            Пользователь:
            {login}
          </h2>
          <h3>Изменить место доставки:</h3>
          {/* <div>карта</div> */}
        </div>
        <div className="catalogCards">
          {orders.map((order) => (
            <div className="card" key={order.id} id="styleForCardCabinet">
              {/* <img className="card-img-top" src="#" alt="Фото товара" /> */}
              <div className="card-body">
                <h3 className="card-title">{order.Product.title}</h3>
                <h5 className="card-title" id="priceInProduct">
                  {order.Product.firstPrice}
                </h5>
                <h5 className="card-title">
                  {order.Product.currentPrice}
                </h5>
                <button type="button" id={order.id} className="btn btn-outline-danger cardButton deleteOrder">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
