const React = require('react');
const Layout = require('./Layout');

module.exports = function AllCats({ user, categories }) {
  return (
    <Layout user={user} categories={categories}>

      {/*   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 4" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 5" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 6" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 7" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 8" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 9" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 10" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 11" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 12" />
        </div>
        <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>

                  First slide label
                </h5>
                <p>

                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          ))} */}
      {/* <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div> */}
      {/* </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <div className="catMainContainer">
        {categories.map((el) => (
          <div id={el.id} className="oneCatCard">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/img/sl_051022_50280_34.jpg" className="img-fluid rounded-start" alt="..." />
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

      {/*  <div className="mainContainerAll">
                {allPoses.map((el) => (
                    <div id={el.id} className="oneAsanaCard">
                        <div className="card">
                            <img src={el.img_url} className="card-img-top" alt="pic" />
                            <div className="card-body">
                                <h5 className="card-title">{el.sanskrit_name}</h5>
                                <p className="card-text">{el.english_name}</p>
                                <button id={el.id} name="addtoseq" type="submit" className="btn btn-primary">Add to my sequence</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
 */}
      {/* <script defer src="/js/dragndrop.js" /> */}
    </Layout>
  );
};
// style={{ width: `${18}rem` }}
// href={`/addtofav/${el.id}`}
