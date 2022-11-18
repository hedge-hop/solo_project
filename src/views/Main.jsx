const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, allPoses }) {
  return (
    <Layout user={user} allPoses={allPoses}>
      {/*  <div>
        <img src="https://cdn.dribbble.com/users/406059/screenshots/5254513/media/d182024c546f188ab255a34229374f7a.gif" alt="mainpic" />
      </div> */}
      {/*  <div>
        <img src="https://cdn.dribbble.com/users/406059/screenshots/5254534/media/5768b6b149d357ec570d998a707aaf21.gif" alt="mainpic" />
      </div> */}
      {user ? (

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
      ) : (
        <div className="mainContainer">
          <div className="welcomeTxtBox">
            <h3 className="welcometext">
              Practice yoga,
              smile with your liver
              and develop your own sequences with YogaDev

            </h3>

          </div>

          {/* <img src="/img/yoga.png" /> */}
          {/*  {allPoses.map((el) => (
            <div id={el.id} className="oneAsanaCard">
              <div className="card">
                <img src={el.img_url} className="card-img-top" alt="pic" />
                <div className="card-body">
                  <h5 className="card-title">{el.sanskrit_name}</h5>
                  <p className="card-text">{el.english_name}</p>
                  <button id={el.id} name="addtofav" className="btn btn-primary disable">Add to fav</button>
                </div>
              </div>
            </div>
          ))} */}

          <div>
            <img src="https://cdn.dribbble.com/users/406059/screenshots/5254534/media/5768b6b149d357ec570d998a707aaf21.gif" alt="mainpic" className="main-nouser-pic" scale="hover" />
          </div>
        </div>
      )}

      <script defer src="/js/addFavScript.js" />
      {/* <script defer src="/js/dragndrop.js" /> */}
    </Layout>
  );
};
// style={{ width: `${18}rem` }}
// href={`/addtofav/${el.id}`}
