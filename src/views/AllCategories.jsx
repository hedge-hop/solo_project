const React = require('react');
const Layout = require('./Layout');

module.exports = function AllCats({ user, categories }) {
  return (
    <Layout user={user} categories={categories}>

      <div className="catMainContainer">
        {categories.map((el) => (
          <div id={el.id} className="oneCatCard">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/img/yoga.png" className="img-fluid rounded-start" alt="img" className="cat-img" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{el.name}</h5>
                  <p className="card-text">{el.description}</p>
                  <a name="filter-link" href={`/filter/${el.id}`} id={el.id} className="card-text">See the list</a>
                  <small className="text-muted"><a name="filter-link" href={`/filter/${el.id}`} id={el.id} className="card-text">See the list</a></small>
                </div>
              </div>
            </div>
          </div>

        ))}
      </div>
    </Layout>
  );
};
// style={{ width: `${18}rem` }}
// href={`/addtofav/${el.id}`}

{ /* <div id={el.id} className="oneCatCard">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/img/meditation.png" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{el.name}</h5>
                  <p className="card-text">{el.description}</p>
                  <a name="filter-link" href={`/filter/${el.id}`} id={el.id} className="card-text">See the list</a>
                  <small className="text-muted"><a name="filter-link" href={`/filter/${el.id}`} id={el.id} className="card-text">See the list</a></small>
                </div>
              </div>
            </div>
          </div> */ }
