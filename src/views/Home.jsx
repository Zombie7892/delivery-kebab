const React = require("react");
const Layout = require("./Layout");

module.exports = function Home({ login, products }) {
  return (
    <Layout login={login}>
      <div className="catalogCards" style={{ marginTop: "1%" }}>
        {/* {products.reverse().map((product) => ( */}
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="#" alt="Фото товара" />

          <div className="card-body">
            <h5 className="card-title" style={{ color: "#DC143C" }}>
              (Новая цена) ₽
            </h5>
            <h5
              className="card-title"
              style={{ textDecoration: "line-through" }}
            >
              (Исходная цена) ₽
            </h5>
            {/* { роль-клиент ? ( 
              
             ) : ( 
             <>  */}

            {"  "}
            <a href="#" type="button" className="btn btn-outline-info">
              Выкупить
            </a>
            {/* </>
                )} */}
          </div>
        </div>
        {/* ))} */}
      </div>
    </Layout>
  );
};
