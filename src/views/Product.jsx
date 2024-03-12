
const React = require('react');
const calcCrow = require('../utils/distance');

function Product({ product }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img className="card-img-top" src="#" alt="Фото товара" /> */}
      <div className="card-body">
        
        <img
          src={`/assets/img/${product.photo}`}
          alt="фото продукта"
          className="card-img-top"
        />
        <h3 className="card-title">{product.title}</h3>
        <h5 className="card-title" id="priceInProduct">
          {product.firstPrice}₽
        </h5>
        <h5 className="card-title">{product.currentPrice}₽</h5>
        <button
          className="btn btn-outline-danger cardBtn"
          type="button"
          id={product.id}
        >

          Цена со скидкой:
          {product.currentPrice}
        </h5>
        <h3>
          До заказа:
          {calcCrow(product.latitude, product.longitude, 55.797381, 37.80261)}
          км
        </h3>
        <button className="cardBtn" type="button" id={product.id}>
          Выкупить
        </button>
      </div>
    </div>
  );
}

module.exports = Product;
