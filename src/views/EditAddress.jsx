const React = require('react');
const Layout = require('./Layout');

module.exports = function EditAddress({ login, seller, user }) {
  return (
    <Layout login={login} seller={seller}>
      <script defer src="/js/editAddress.js" />
      <h2 id="headerShow">Измените точку своего домашнего адреса:</h2>
      <form className="editForm" method="post" action={`user/editAddress/${user.id}`}>
        <input
          type="text"
          className="mapHeight"
          name="longitude"
          style={{ display: 'none' }}
        />
        <input
          type="text"
          className="mapWidth"
          name="latitude"
          style={{ display: 'none' }}
        />
        <div
          id="map"
          style={{ width: '550px', height: '300px', marginBottom: '10px' }}
        />
        <button type="submit" className="btn btn-outline-danger regBtn">
          Изменить
        </button>
      </form>
      <h3 className="regMsg"> </h3>

    </Layout>
  );
};
