const React = require('react');
const Layout = require('./Layout');
const Headers = require('./Headers');

module.exports = function Main() {
  return (
    <Layout>
      <Headers />
      <div className="container">
        <div className="carousel">
          {/* {Array.map((el) => (
            <div className="carousel__face">
              <span>{el.title}</span>
            </div>
          ))} */}
          <div className="carousel__face">
            <span>This is something</span>
          </div>
          <div className="carousel__face">
            <span>Very special</span>
          </div>
          <div className="carousel__face">
            <span>
              <img src="https://assets-global.website-files.com/5e5d43546b94f97f39c228fa/5f3fc4bf3960a278a2abb05c_alex-clockwork-orange.png" />
            </span>
          </div>
          <div className="carousel__face">
            <span>For you</span>
          </div>
          <div className="carousel__face">
            <span>Just give it</span>
          </div>
          <div className="carousel__face">
            <span>A try</span>
          </div>
          <div className="carousel__face">
            <span>And see</span>
          </div>
          <div className="carousel__face">
            <span>How IT Works</span>
          </div>
          <div className="carousel__face">
            <span>Woow</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
