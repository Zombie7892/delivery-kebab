const React = require("react");
const Navbar = require("./Navbar");

module.exports = function Layout({ children, login, seller, userId }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          type="image/x-icon"
          href="/assets/favicon.png"
          rel="shortcut icon"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
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
