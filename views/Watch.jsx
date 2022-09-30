const React = require('react');
const Layout = require('./Layout');

module.exports = function ({ oneWatch }) {
  return (
    <div className="carousel__face">
      <span>
        <image src={`/images/${oneWatch.img}`} className="imageMainItem" />
        <h2>{oneWatch.title}</h2>
        <p>{oneWatch.description}</p>
      </span>
    </div>
  );
};
