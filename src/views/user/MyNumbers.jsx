const React = require('react');
const Layout = require('../Layout');

module.exports = function MyNumbers({
  login, userCompanies,
}) {
  return (
    <Layout login={login}>
      <div className="container">
        <h1>Ваши записи:</h1>
        {userCompanies.map((company) => (
          <div className="companyCard" id={company.id} key={company.id}>
            <p className="companyName"><b>{company.company}</b></p>
            <p className="companyNumber">
              Тел:
              {' '}
              {company.number}
            </p>
            <a className="editCompanyBtn" href={`/company/edit/${company.id}`}>Изменить</a>
            <button className="deleteCompanyBtn">Удалить</button>
          </div>
        ))}
      </div>
      <script defer src="/js/deleteCompany.js" />

    </Layout>
  );
};
