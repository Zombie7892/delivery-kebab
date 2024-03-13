const React = require('react');
const Layout = require('../Layout');

module.exports = function NewProduct({ login, seller }) {
  return (
    <Layout login={login} seller={seller}>
      <script defer src="/js/newProduct.js" />

      <div className="newProductContainer">
        <div className="newProductBox">
          <form
            method="POST"
            action="/product/new"
            id="newProductForm"
            className="newProductForm"
            encType="multipart/form-data"
          >
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

            <input type="file" name="photo" />
            <input type="text" className="mapHeight" name="longitude" style={{ display: 'none' }} />
            <input type="text" className="mapWidth" name="latitude" style={{ display: 'none' }} />
            <p>Укажите местоположение товара</p>
            <div id="map" style={{ width: '550px', height: '300px', marginBottom: '10px' }} />

            <button type="submit" className="newProductSubmitBtn">
              Добавить
            </button>
          </form>
        </div>

      </div>
    </Layout>
  );
};
