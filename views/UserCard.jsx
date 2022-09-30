const React = require('react');

function UserCard({ user, oneCard }) {
  return (
    <div className="card user-card" style={{ width: '18rem' }} data-id={oneCard.id}>
      <img src={`/images/${oneCard.img}`} className="card-img-top" alt="..." />
      <div className="card-body">
        Title:
        <h5 className="card-title">
          {oneCard.title}
        </h5>
        <p className="card-text">
          {oneCard.description}
        </p>
      </div>
      <div className="card-body btnList">
        {user.isAdmin ? (
          <button type="button" className="btn btn-danger" id={oneCard.id}>delete</button>
        ) : (
          <>
            <button type="button" className="btn btn-success">edit</button>
            <button type="button" className="btn btn-warning">save</button>
            <button type="button" className="btn btn-danger" id={oneCard.id}>delete</button>
          </>
        )}
      </div>
    </div>
  );
}

module.exports = UserCard;
