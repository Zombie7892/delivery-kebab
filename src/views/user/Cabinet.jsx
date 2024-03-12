const React = require("react");
const Layout = require("../Layout");

module.exports = function Cabinet({ login, userId, products, orders }) {
  return (
    <Layout login={login}>
      <div>
        <div id="marginDiv">
          <h2>Пользователь: {login}</h2>

          <div>
            <a
              href="/product/new"
              type="button"
              className="btn btn-outline-warning"
            >
              Добавить новый заказ
            </a>{" "}
          </div>
        </div>
        <div>
          <h3 id="marginH">Добавленные заказы:</h3>
          <div className="catalogCards">
            {products.map((product) => (
              <div className="card" id="styleForCardCabinet" key={product.id}>
                {/* <img className="card-img-top" src="#" alt="Фото товара" /> */}
                <div className="card-body">
                  <h3 className="card-title">{product.title}</h3>
                  <h5 className="card-title" id="priceInProduct">
                    {product.firstPrice}
                  </h5>
                  <h5 className="card-title">{product.currentPrice}</h5>
                  {product.userId === userId ? (
                    <button
                      type="button"
                      id={product.id}
                      className="btn btn-outline-danger cardButton delete"
                    >
                      Удалить
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Активные заказы:</h3>
          <div className="catalogCards">{/* карточки товаров */}</div>
        </div>
      </div>
    </Layout>
  );
};
