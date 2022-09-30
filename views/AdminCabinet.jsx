const React = require('react');
const Layout = require('./Layout');
const AdminCard = require('./AdminCard');
const UserCard = require('./UserCard');

function AdminC({ watch, user, order }) {
  return (
    <Layout title="admin cabinet" user={user}>
      <div className="add_cont">
        <div className="addFormAdmin">
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
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
              <input type="text" className="form-control" name="price" />
            </div>
            <button type="submit" className="btn btn-outline-success formBtn">Success</button>
            <script defer src="/js/addItem.js" />
          </form>
        </div>
      </div>
      <hr />

      <h5>Our products</h5>
      <section className="container_one">
        {watch.map((card) => <AdminCard key={card.id} oneCard={card} user={user} />)}
      </section>
      <hr />
      <h5>Orders from clients</h5>
      <section className="container_two">
        {order.map((card) => <UserCard key={card.id} oneCard={card} user={user} />)}
      </section>
      <form action="/download" method="get">
        <button type="submit">Download data</button>
      </form>
      <script defer src="/js/application.js" />
      <script defer src="/js/additem.js" />
    </Layout>
  );
}

module.exports = AdminC;
