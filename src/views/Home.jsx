const React = require('react');
const Layout = require('./Layout');
const Product = require('./Product');

module.exports = function Home({ login, products, seller }) {
  return (
    <Layout login={login}>
      {login ? (
        <>
          <h3>
            Hello
            {login}
          </h3>
          {seller ? null : (
            <div className="catalogCards" style={{ marginTop: '1%' }}>
              {products.reverse().map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      ) : (
        <h3>Hello guest, register to see more</h3>
      )}
    </Layout>
  );
};
