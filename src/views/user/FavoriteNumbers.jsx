const React = require('react');
const Layout = require('../Layout');

module.exports = function FavoriteNumbers({
  login, userId, favoriteCompanies,
}) {
  return (
    <Layout login={login}>
      <div className="container">
        <h1>Ваше избранное:</h1>
        {favoriteCompanies.map((company) => (
          <div className="companyCard" id={company['Companies.id']} key={company['Companies.id']}>
            <p className="companyName"><b>{company['Companies.company']}</b></p>
            <p className="companyNumber">{company['Companies.number']}</p>
            {company['Companies.id'] !== null ? <button className="removeFromFavoriteBtn">Убрать из избранного</button> : <p>Вы ничего еще не добавили</p> }
            {company['Companies.user_id'] === userId ? <a className="editCompanyBtn" href={`/company/edit/${company['Companies.id']}`}>Изменить</a> : <div /> }
          </div>
        ))}
      </div>
      <script defer src="/js/removeFavorite.js" />

    </Layout>
  );
};
