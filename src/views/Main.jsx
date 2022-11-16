const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, allFromApi }) {
  return (
    <Layout user={user} allFromApi={allFromApi}>
      {user ? (
        <div className="mainContainer">
          {allFromApi.map((el) => (
            <form id={el.id} action="/addtofav" method="POST" className="oneAsanaCard">
              <div className="card">
                <img src={el.img_url} className="card-img-top" alt="pic" />
                <div className="card-body">
                  <h5 className="card-title">{el.sanskrit_name}</h5>
                  <p className="card-text">{el.english_name}</p>
                  <a data-userid={user.id} id={el.id} name="addtofav" type="submit" className="btn btn-primary">Add to fav</a>
                </div>
              </div>
            </form>
          ))}

        </div>
      ) : (
        <div className="mainContainer">
          {allFromApi.map((el) => (
            <form id={el.id} action="/addtofav" method="POST" className="oneAsanaCard">
              <div className="card">
                <img src={el.img_url} className="card-img-top" alt="pic" />
                <div className="card-body">
                  <h5 className="card-title">{el.sanskrit_name}</h5>
                  <p className="card-text">{el.english_name}</p>
                  <a id={el.id} name="addtofav" type="submit" className="btn btn-primary disable">Add to fav</a>
                </div>
              </div>
            </form>
          ))}

        </div>
      )}

      <h1>Привет из вьюшки Main</h1>
      <script defer src="/js/addFavScript.js" />
      <script defer src="/js/dragndrop.js" />
    </Layout>
  );
};
// style={{ width: `${18}rem` }}
// href={`/addtofav/${el.id}`}
