const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowRoute({ login, seller, order }) {
  return (
    <Layout login={login} seller={seller}>

      <div id={order.id} className="styleContainerShow">
          <h2 id="headerShow">Маршрут от вашего товара до заказчика:</h2>
        <div className="routeContainer">
          <div
            id="routeMap"
            style={{ width: '550px', height: '300px', marginBottom: '10px' }}
          />
          <div className="showText">
            <div id="distanceRoute" />
            <div id="timeRoute" />
            <div id="timeWithJamsRoute" />
            <script defer src="/js/mapRender.js" />
          </div>
        </div>
      </div>
      <div id="blackBoxShow" />
    </Layout>
  );
};
