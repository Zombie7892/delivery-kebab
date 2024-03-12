const React = require('react');
const Navbar = require('./Navbar');


module.exports = function Layout({ children, login }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link type="image/x-icon" href="/assets/favicon.ico" rel="shortcut icon" />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Деливери Кебаб!</title>
      </head>
      <header />
      <body>
        <Navbar login={login} />
        
        {children}
      </body>
    </html>
  );
};
