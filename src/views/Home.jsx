const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ login }) {
  return (
    <Layout login={login}>
      <div className="container homePage">
        <h1>Добро пожаловать в delivery cebab!</h1>
      </div>
    </Layout>
  );
};
