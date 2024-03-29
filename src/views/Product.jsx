const React = require('react');
const calcCrow = require('../utils/distance');

function Product({ product }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {/* <img className="card-img-top" src="#" alt="Фото товара" /> */}
      <div className="card-body">
        <img
          src={`/assets/img/${product.photo}`}
          alt="фото продукта"
          className="card-img-top"
        />
        <h3 className="card-title">{product.title}</h3>
        <h5 className="card-title" id="priceInProduct">
          {product.firstPrice}
          ₽
        </h5>
        <h4 className="card-title">
          {product.currentPrice}
          ₽
        </h4>
        <h5>
          Время доставки:
          {' '}
          {product.distance < 60 ? `${product.distance} мин.` : `${Math.floor(product.distance / 60)} ч ${product.distance % 60} мин.`}
        </h5>
        <button
          className="btn btn-outline-danger cardBtn"
          type="button"
          id={product.id}
        >
          Выкупить
        </button>
        <h5 className="resMsg" id={`resMsg_${product.id}`} />
        <h5 className="errMsg" id={`errMsg_${product.id}`} />
      </div>
    </div>
  );
}

module.exports = Product;
