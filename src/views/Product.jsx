const React = require('react');

function Product({ product }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {/* <img className="card-img-top" src="#" alt="Фото товара" /> */}
      <div className="card-body">

        <h3 className="card-title" style={{ color: '#DC143C' }}>{product.title}</h3>
        <img src={`/assets/img/${product.photo}`} alt="фото продукта" height="200" />
        <h5
          className="card-title"
          style={{ textDecoration: 'line-through' }}
        >
          Изначальная цена:
          {' '}
          {product.firstPrice}
        </h5>
        <h5
          className="card-title"
        >
          Цена со скидкой:
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
