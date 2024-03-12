const React = require('react');
const Layout = require('../Layout');

module.exports = function Cabinet({
  login, userId, products, orders,
}) {
  return (
    <Layout login={login}>
      <div>
        <h2>
          Пользователь:
          {login}
        </h2>

        <div>
          <a href="/product/new" type="button" className="btn btn-outline-info">
            Добавить новый заказ
          </a>
        </div>
        <div>
          <h3>Добавленные заказы:</h3>
          <div className="catalogCards" style={{ marginTop: '1%' }}>
            {products.map((product) => (
                <div className="card" key={product.id} style={{ width: '18rem' }}>
                  {/* <img className="card-img-top" src="#" alt="Фото товара" /> */}
                  <div className="card-body">
                    <h3 className="card-title" style={{ color: '#DC143C' }}>{product.title}</h3>
                    <h5 className="card-title" style={{ textDecoration: 'line-through' }}>
                      {product.firstPrice}
                    </h5>
                    <h5 className="card-title">
                      {product.currentPrice}
                    </h5>
                    {product.userId === userId ? (
                      <button type="button" id={product.id} className="cardButton delete">
                        Delete
                      </button>
                    ) : null}
                  </div>
                </div>
            ))}

          </div>
        </div>
        <div>
          <h3>Активные заказы:</h3>
          <div className="catalogCards" style={{ marginTop: '1%' }}>
            {/* карточки товаров */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
