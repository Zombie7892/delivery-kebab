const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowRoute({ login, seller }) {
  return (
    <Layout login={login} seller={seller}>

      <p>Маршрут от вашего товара до заказчика</p>
      <div id="map" style={{ width: '550px', height: '300px', marginBottom: '10px' }} />

    </Layout>
  );
};
