const React = require('react');
const Layout = require('./Layout');

module.exports = function AllPostures({ user, allPoses }) {
  return (
    <Layout user={user} allPoses={allPoses}>
      <div className="container">
        <div>
          <img src="https://cdn.dribbble.com/users/406059/screenshots/5254513/media/d182024c546f188ab255a34229374f7a.gif" alt="mainpic" className="main-user-pic" />
        </div>
        <div className="divider">
          <h2 className="divide-text">All yoga postures</h2>
        </div>
        <div className="mainContainer">

          {allPoses.map((el) => (
            <div id={el.id} className="oneAsanaCard">
              <div className="card">
                <img src={el.img_url} className="card-img-top" alt="pic" />
                <div className="card-body">
                  <h5 className="card-title">{el.sanskrit_name}</h5>
                  <p className="card-text">{el.english_name}</p>
                  <button data-userid={user.id} id={el.id} name="addtofav" type="submit" className="btn btn-outline-danger">Add</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <script defer src="/js/addFavScript.js" />
      {/* <script defer src="/js/chooseFromAll.js" /> */}
      {/* <script defer src="/js/dragndrop.js" /> */}
    </Layout>
  );
};
// style={{ width: `${18}rem` }}
// href={`/addtofav/${el.id}`}
