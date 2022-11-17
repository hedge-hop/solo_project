const React = require('react');
const Layout = require('./Layout');

module.exports = function AllPostures({ user, allPoses }) {
  return (
    <Layout user={user} allPoses={allPoses}>
      {user ? (
        <div className="mainContainerAll">
          {allPoses.map((el) => (
            <div id={el.id} className="oneAsanaCard">
              <div className="card">
                <img src={el.img_url} className="card-img-top" alt="pic" />
                <div className="card-body">
                  <h5 className="card-title">{el.sanskrit_name}</h5>
                  <p className="card-text">{el.english_name}</p>
                  <button data-userid={user.id} id={el.id} name="addtoseq" type="submit" className="btn btn-primary">Add to my sequence</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      ) : (
        <div className="mainContainer">
          <h5>you have to log in, to see the page</h5>

        </div>
      )}

      <h1>Привет из вьюшки Main</h1>
      <script defer src="/js/chooseFromAll.js" />
      {/* <script defer src="/js/dragndrop.js" /> */}
    </Layout>
  );
};
// style={{ width: `${18}rem` }}
// href={`/addtofav/${el.id}`}
