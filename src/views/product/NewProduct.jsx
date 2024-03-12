const React = require('react');
const Layout = require('../Layout');

module.exports = function NewProduct({ login }) {
  return (
    <Layout login={login}>
      <div className="newProductContainer">
        <div className="newProductBox">
          <form method="POST" action="/product/new" id="newProductForm" className="newProductForm">
            <label htmlFor="nameInput" className="form-label">
              Название продукта
            </label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="titleInput"
            />

            <label htmlFor="firstPriceInput" className="form-label">
              Изначальная цена
            </label>
            <input
              name="firstPrice"
              type="text"
              className="form-control"
              id="firstPriceInput"
            />

            <label htmlFor="discount" className="form-label">
              Размер скидки
            </label>
            <input
              name="discount"
              type="text"
              className="form-control"
              id="discount"
            />

            {/* <label htmlFor="imageInput" className="form-label">
              Image
            </label>
            <input
              name="image"
              type="text"
              className="form-control"
              id="imageInput"
            /> */}

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
