const React = require('react');
const Layout = require('./Layout');
const Product = require('./Product');

module.exports = function Home({
  userId, login, products, seller,userCoord
}) {
  return (
    <Layout login={login} seller={seller} userId={userId}>
      <script defer src="/js/addOrder.js" />
      <script defer src="/js/apiHome.js" />
<div id='latitude'>{userCoord?.latitude}</div>
<div id='longitude' >{userCoord?.longitude}</div>
      <img className="advertising" src="/assets/img/mas.jpg" />
      {login ? (
        <>
          <h3>
            Добрый день,
            {login}
          </h3>
          {seller ? null : (
            <>
              <div
                id="map"
                style={{
                  width: '650px',
                  height: '400px',
                  marginBottom: '10px',
                }}
              />
              <div className="catalogCards">
                {products.reverse().map((product) => (
                  <Product key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <h3>Зарегистрируйтесь, чтобы увидеть больше</h3>
      )}
    </Layout>
  );
};
