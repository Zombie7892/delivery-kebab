const React = require("react");
const Layout = require("./Layout");

module.exports = function Home({ login }) {
  return (
    <Layout login={login}>
      <div>
        <h2>Пользователь: {login}</h2>

        <div>
          <a href="#" type="button" className="btn btn-outline-info">
            Добавить новый заказ
          </a>
        </div>
        <div>
          <h3>Добавленные заказы:</h3>
          <div className="catalogCards" style={{ marginTop: "1%" }}>
            {/* карточки товаров */}
          </div>
        </div>
        <div>
          <h3>Активные заказы:</h3>
          <div className="catalogCards" style={{ marginTop: "1%" }}>
            {/* карточки товаров */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
