const React = require("react");
const Layout = require("../Layout");

module.exports = function Client({login}) {
  return (
    <Layout login={login}>
      <div>
        <div id="marginDiv">
          <h2>Пользователь: {login}</h2>
          <h3>Изменить место доставки:</h3>
          {/* <div>карта</div> */}
        </div>
      </div>
    </Layout>
  );
};
