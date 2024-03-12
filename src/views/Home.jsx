const React = require('react');
const Layout = require('./Layout');
const Product = require('./Product');

module.exports = function Home({ login, products }) {
  return (
    <Layout login={login}>
      <div className="catalogCards" style={{ marginTop: '1%' }}>
        {products.reverse().map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};
