const React = require('react');
const Layout = require('./Layout');
const UserCard = require('./UserCard');

function PersonalAccount({ arrOrders, user }) {
  console.log(arrOrders);
  return (
    <Layout title="personal cabinet" user={user}>
      <div className="userAddContainer">
        <div className="addFormOne">
          <h5>
            Add new item
          </h5>
          <form id="form" className="addForm" method="POST" style={{ whidth: '300px' }} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
              <input type="text" className="form-control" name="title" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
              <input type="text" className="form-control" name="descr" />
            </div>
            {/* <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Image</label>
          <input type="text" className="form-control" name="img" />
        </div> */}
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              name="image"
              multiple
            />
            <button type="submit" className="btn btn-outline-success formBtn">Success</button>
          </form>
        </div>
      </div>
      <h3>Privet</h3>
      <label>my container</label>
      <section className="container_two">
        {arrOrders.map((card) => <UserCard key={card.id} oneCard={card} user={user} />)}
      </section>
      <script defer src="/js/personal.account.js" />
    </Layout>
  );
}

module.exports = PersonalAccount;
