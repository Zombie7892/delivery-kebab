const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowRoute({ login, seller }) {
  return (
    <Layout login={login} seller={seller}>
      <div className="routeContainer">
        <p>Маршрут от вашего товара до заказчика</p>
        <div id="routeMap" style={{ width: '550px', height: '300px', marginBottom: '10px' }} />
        <div id="distanceRoute" />
        <div id="timeRoute" />
        <div id="timeWithJamsRoute" />
        <script defer src="/js/mapRender.js" />
      </div>

    </Layout>

  );
};
