const React = require('react');
const Layout = require('../Layout');
const Product = require('../Product');

module.exports = function SearchProduct({ login, seller, userId, products }) {
  return (
    <Layout login={login} seller={seller} userId={userId}>
      <script defer src="/js/searchProduct.js" />
      {/* <div className="styleContainer"> */}
      <div className='container'>
      <div className="searchProductContainer">
        <div className="searchProductBox">
          <form
            method="POST"
            id="searchProductForm"
            className="searchProductForm"
            encType="multipart/form-data"
          >
            <input
              name="searchProduct"
              type="text"
              className="form-control"
              id="searchProduct"
            />

            <button
              type="submit"
              className="btn btn-outline-danger searchProductBtn"
            >
              Искать
            </button>
          </form>
        </div>
      </div>
      <div className="catalogCards">
        {products?.reverse().map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      </div>
    </Layout>
  );
};
