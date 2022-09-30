const React = require('react');

function AdminCard({ user, oneCard }) {
  console.log(oneCard, '@@@@@');
  console.log(oneCard.title, '%%%%%%%%');
  return (
    <div className="card admin-card" style={{ width: '18rem' }} data-id={oneCard.id}>
      <img src={`/images/${oneCard.img}`} className="card-img-top" alt="..." />
      <div className="card-body">
        Title:
        <h5 className="card-title">
          {oneCard.title}
        </h5>
        <p className="card-text">
          {oneCard.description}
        </p>
        <p className="card-text">
          {oneCard.price}
        </p>
      </div>
      <div className="card-body btnList">
        <button type="button" className="btn btn-success">edit</button>
        <button type="button" className="btn btn-warning">save</button>
        <button type="button" className="btn btn-danger" id={oneCard.id}>delete</button>
      </div>
    </div>
  );
}

module.exports = AdminCard;
