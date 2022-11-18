const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, allPoses, categories }) {
  return (
    <Layout user={user} allPoses={allPoses}>

      {user ? (
        <div className="container">
          {/* <div>
            <img src="https://cdn.dribbble.com/users/406059/screenshots/5254513/media/d182024c546f188ab255a34229374f7a.gif" alt="mainpic" className="main-user-pic" />
          </div>
          <div> */}
          {/* <div className="divider">
              <a href="/allpostures">
                <h2 className="divide-text">Postures</h2>
              </a>
              <hr />
              <a href="/allcategories">
                <h2 className="divide-text">Categories</h2>
              </a>
            </div> */}
          <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://cdn.dribbble.com/users/1488946/screenshots/16019608/media/4bd75c828d042e7b946a2ef4908fce82.png?compress=1&resize=400x300&vertical=top" className="d-block w-100" alt="car1" className="car-pic" />
                  {/* https://cdn.dribbble.com/users/1488946/screenshots/16019608/media/4bd75c828d042e7b946a2ef4908fce82.png?compress=1&resize=400x300&vertical=top */}
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[0].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[0].description}
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/6024852/screenshots/15624147/media/ed96b46cf1a8375c7d8006bda2f1ed6e.jpg?compress=1&resize=1000x750&vertical=top" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[1].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[1].description}
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/userupload/4002633/file/original-efb1b5e956f45e244933e1e3e85c2bfa.jpg?compress=1&resize=1024x768" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[2].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[2].description}
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/6024852/screenshots/15577906/media/5220d253e66e515cc16033ceac358548.jpg?compress=1&resize=1000x750&vertical=top" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[3].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[3].description}
                    </h5>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/1338391/screenshots/15441684/media/960532de0f596c403990485b1d62de18.jpg" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[4].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[4].description}
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/418124/screenshots/15054977/media/4e7533f125f14d430b22d26575f9143f.png?compress=1&resize=1000x750&vertical=top" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[5].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[5].description}
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/9186591/screenshots/19862451/media/c593ad7114f608fe08add8ebf1b0279c.jpg?compress=1&resize=1000x750&vertical=top" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[6].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[6].description}
                    </h5>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/1338391/screenshots/15399667/media/bfee5543d91709e4e7585b31d354591d.jpg?compress=1&resize=1000x750&vertical=top" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[7].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[7].description}
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/814921/screenshots/13933789/media/0370005618895433f93419d2d9cf925f.jpg?compress=1&resize=640x480&vertical=top" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[8].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[8].description.substring(0, 80)}
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/1815631/screenshots/14598430/media/105f796bf7e3ecae0b5fc9f6eef63ee1.png?compress=1&resize=640x480&vertical=top" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[9].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[9].description}
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/6024852/screenshots/15614062/media/589df2c14deb3bb3e23d28b7953213ac.jpg?compress=1&resize=1000x750&vertical=top" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[10].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[10].description}
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/4438375/screenshots/9177076/media/8ba3d98b7cd59a85eb846539d8649f88.png?compress=1&resize=640x480&vertical=top" className="d-block w-100" alt="car1" className="car-pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="cat-text-name">
                      {categories[11].name}
                    </h2>
                    <h5 className="cat-text">
                      {categories[11].description}
                    </h5>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* <div className="divider">
            <a href="/allpostures">
              <h2 className="divide-text">Postures</h2>
            </a>
            <hr />
            <a href="/allcategories">
              <h2 className="divide-text">Categories</h2>
            </a>
          </div> */}
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
          <div>
            <img src="https://cdn.dribbble.com/users/406059/screenshots/5254534/media/5768b6b149d357ec570d998a707aaf21.gif" alt="mainpic" className="main-nouser-pic" scale="hover" />
          </div>
        </div>
      )}

      {/* <script defer src="/js/addFavScript.js" /> */}
      {/* <script defer src="/js/dragndrop.js" /> */}
    </Layout>
  );
};
