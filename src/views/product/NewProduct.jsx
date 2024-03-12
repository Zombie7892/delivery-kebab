const React = require('react');
const Layout = require('../Layout');

module.exports = function NewProduct({}) {
  return (
    <Layout>
      <div className="newProductContainer">
        <div className="newProductBox">
          <form action="" id="newProductForm" className="newProductForm">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="nameInput"
            />

            <label htmlFor="imageInput" className="form-label">
              Image
            </label>
            <input
              name="image"
              type="text"
              className="form-control"
              id="imageInput"
            />

            <label htmlFor="firstPriceInput" className="form-label">
              First price
            </label>
            <input
              name="firstPrice"
              type="text"
              className="form-control"
              id="firstPriceInput"
            />

            <label htmlFor="discount" className="form-label">
              Discount
            </label>
            <input
              name="discount"
              type="text"
              className="form-control"
              id="discount"
            />

            <button type="submit" className="newProductSubmitBtn">
              Добавить
            </button>
          </form>
        </div>
        <div className="mapBox">MAP</div>
      </div>
      <script src="/js/newProduct.js" />
    </Layout>
  );
};
