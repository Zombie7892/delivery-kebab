const React = require("react");
const Layout = require("../Layout");

module.exports = function NewProduct({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/apiNew.js" />
      <div className="styleContainer">
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
                Название продукта:
              </label>
              <input
                name="title"
                type="text"
                className="form-control"
                autoComplete="off"
                id="titleInput"
              />

              <label htmlFor="firstPriceInput" className="form-label">
                Изначальная цена:
              </label>
              <input
                name="firstPrice"
                type="text"
                className="form-control"
                autoComplete="off"
                id="firstPriceInput"
              />

              <label htmlFor="discount" className="form-label">
                Размер скидки:
              </label>
              <input
                name="discount"
                type="text"
                className="form-control"
                autoComplete="off"
                id="discount"
              />

              <input type="file" name="photo" id="marginPhoto"/>

              <button type="submit" className="btn btn-outline-danger newProductSubmitBtn">
                Добавить
              </button>
            </form>
          </div>
          {/* <div
          id="map"
          style={{
            width: '550px',
            height: '300px',
            marginBottom: '10px',
          }}
        />
        {' '} */}
        </div>
      </div>
      <div id="blackBox"></div>
      <script src="/js/newProduct.js" />
    </Layout>
  );
};
