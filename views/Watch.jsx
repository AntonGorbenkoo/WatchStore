const React = require('react');
const Layout = require('./Layout');

module.exports = function ({ watch }) {
  return (
    <div className="carousel__face">
      <span>
        <image src={watch.img} className="imageMainItem" />
        <h2>{watch.title}</h2>
        <p>{watch.description}</p>
      </span>
    </div>
  );
};
