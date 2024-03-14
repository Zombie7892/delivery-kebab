const React = require("react");
const Layout = require("./Layout");

module.exports = function EditAddress({ login, seller, user }) {
  return (
    <Layout login={login} seller={seller}>
      <script defer src="/js/editAddress.js" />
      <div className="editAddressBackground">
        <div className="centerListCabinet">
          <h2 id="bigRedEA">Измените точку своего домашнего адреса:</h2>
          <form
            className="editForm"
            method="post"
            action={`user/editAddress/${user.id}`}
          >
            <input
              type="text"
              className="mapHeight"
              name="longitude"
              style={{ display: "none" }}
            />
            <input
              type="text"
              className="mapWidth"
              name="latitude"
              style={{ display: "none" }}
            />
            <div
              id="map"
              style={{ width: "600px", height: "400px", marginTop: "3%" }}
            />
            <button type="submit" className="btn btn-outline-danger regBtn" style={{marginLeft: "10%"}}>
              Сохранить изменения
            </button>
          </form>
          <h3 className="regMsg"> </h3>
        </div>
      </div>
    </Layout>
  );
};
