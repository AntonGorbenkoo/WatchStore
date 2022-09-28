const React = require('react');
const Layout = require('../Layout');

module.exports = function Login ({title}) {
    return (
        <Layout title={title}>
            <section className="autherisation">
        <div className="container">
          <h2 className="title">Авторизация</h2>
          <form action="/login" method="post" className="form auth-form">

            <label className="form-label" htmlFor="logo-mail">Введите e-mail</label>
            <input className="form-input input-mail" required type="e-mail" name="mail" placeholder="Введите e-mail" id="logo-mail"/>

            <label className="form-label" htmlFor="logo-pass-rep">Введите пароль</label>
            <input className="form-input" required type="password" name="password" placeholder="Введите пароль" id="logo-pas-rep" />

            <button className="button" type="submit">Войти</button>
            <div id="messageLog" className='error'/>
          </form>
        </div>
      </section> 
        </Layout>
    )
};