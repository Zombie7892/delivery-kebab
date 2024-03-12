const React = require('react');
const Layout = require('./Layout');

module.exports = function Page404({ error }) {
  return (
    <Layout>
      <div className="container">
        <h1>
          Что-то пошло не так!
        </h1>
        <h3>Добро пожаловать на страницу 404!</h3>
        {error ? <h4>{error}</h4> : <div />}
      </div>
    </Layout>
  );
};
