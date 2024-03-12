const React = require('react');

function Product({ product }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {/* <img className="card-img-top" src="#" alt="Фото товара" /> */}
      <div className="card-body">

        <h3 className="card-title" style={{ color: '#DC143C' }}>{product.title}</h3>
        <h5
          className="card-title"
          style={{ textDecoration: 'line-through' }}
        >
          {product.firstPrice}
        </h5>
        <h5
          className="card-title"
          style={{ textDecoration: 'line-through' }}
        >
          {product.currentPrice}
        </h5>
        <button className="cardBtn" type="button" id={product.id}>
          Выкупить
        </button>
      </div>
    </div>
  );
}

module.exports = Product;
