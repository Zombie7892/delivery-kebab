const React = require("react");
const Layout = require("./Layout");
const Product = require("./Product");
const Description = require("./Description");

module.exports = function Home({ userId, login, products, seller, userCoord }) {
  return (
    <Layout login={login} seller={seller} userId={userId}>
      {login ? (
        <div className="backgroundHomeMenu">
          <img className="advertising" src="/assets/img/mas.jpeg" />
          <div className="centerListMenu">
            {seller ? (
              <div className="centerListSeller">
                <Description seller={seller} />
              </div>
            ) : (
              <>
                <div id="map" />
                <div className="catalogCards">
                  {products.reverse().map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>{" "}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="backgroundHome">
          <img className="advertising" src="/assets/img/mas.jpeg" />
          <div className="centerList">
            <Description seller={seller} />
          </div>
        </div>
      )}
      <script defer src="/js/apiHome.js" />
      <script defer src="/js/addOrder.js" />
    </Layout>
  );
};
