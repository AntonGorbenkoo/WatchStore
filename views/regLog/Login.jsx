const React = require('react');
const Layout = require('../Layout');

module.exports = function Login({ title }) {
  return (
    <Layout title={title}>
      <section className="autherisation">
        <div className="container">
          <h2 className="title">Авторизация</h2>
          <form method="post" className="form auth-form">

            <label className="form-label" htmlFor="logo-email">Введите e-mail</label>
            <input className="form-input input-email" required type="e-mail" name="email" placeholder="Введите e-mail" id="logo-mail" />

            <label className="form-label" htmlFor="logo-pass-rep">Введите пароль</label>
            <input className="form-input" required type="password" name="password" placeholder="Введите пароль" id="logo-pas-rep" />

            <button className="button" type="submit">Войти</button>
            <div id="messageLog" className="error" />
          </form>
          <script defer src="/js/auth/client.autherisation.js" />
        </div>
      </section>
    </Layout>
  );
};
