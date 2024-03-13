const React = require('react');
const Navbar = require('./Navbar');

require("dotenv").config();
const { YAPI_KEY,YAPI_KEY2  } = process.env;

module.exports = function Layout({
  children, login, seller, userId,
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script
          defer
          src={`https://api-maps.yandex.ru/2.1/?apikey=${YAPI_KEY}&lang=ru_RU`}
          type="text/javascript"
        />
        <link type="image/x-icon" href="/assets/favicon.png" rel="shortcut icon" />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <title>Delivery-cebab</title>
      </head>
      <header />
      <body>
        <Navbar login={login} seller={seller} userId={userId} />

        {children}
      </body>
    </html>
  );
};
