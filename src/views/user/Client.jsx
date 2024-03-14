const React = require("react");
const Layout = require("../Layout");

module.exports = function Client({ login, orders, user }) {
  return (
    <Layout login={login}>
      <script defer src="/js/deleteOrder.js" />
      <div className="backgroundCab">
        <div className="centerListCabinet">
          <div>
            <div id="marginDiv">
              <h2 className="redTextCab">
                Пользователь:{"  "}
                {login}
              </h2>
              <a href={`/${user.id}`} type="button"
               
                className="btn btn-outline-warning placeClient">
               Изменить место доставки
              </a>
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
                    <h5 className="card-title">{order.Product.currentPrice}</h5>
                    <button
                      type="button"
                      id={order.id}
                      className="btn btn-outline-danger cardButton deleteOrder"
                    >
                      Отменить заказ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
