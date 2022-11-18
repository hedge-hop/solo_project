const React = require('react');
const Layout = require('./Layout');

module.exports = function AllCats({ user, posByCat }) {
  return (
    <Layout user={user} posByCat={posByCat}>
      <div className="mainContainer">
        {posByCat.map((el) => (
          <div id={el.id} className="oneAsanaCard">
            <div className="card">
              <img src={el.img_url} className="card-img-top" alt="pic" />
              <div className="card-body">
                <h5 className="card-title">{el.sanskrit_name}</h5>
                <p className="card-text">{el.english_name}</p>
                <button data-userid={user.id} id={el.id} name="remove" type="submit" className="btn btn-primary">Remove</button>
              </div>
            </div>
          </div>
        ))}

      </div>
      <script src="/js/filter.js" />
    </Layout>
  );
};
