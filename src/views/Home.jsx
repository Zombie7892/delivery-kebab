const React = require("react");
const Layout = require("./Layout");
const Product = require("./Product");

module.exports = function Home({
  userId, login, products, seller,
}) {
  return (
    <Layout login={login} seller={seller} userId={userId}>
      <script defer src="/js/addOrder.js" />

      <img className="advertising" src="/assets/img/mas.jpg" />
      {login ? (
        <>
          <h3>Добрый день, {login}</h3>
          {seller ? null : (
            <div className="catalogCards">
              {products.reverse().map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      ) : (
        <h3>Зарегистрируйтесь, чтобы увидеть больше</h3>
      )}
    </Layout>
  );
};
