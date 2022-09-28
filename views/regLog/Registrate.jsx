const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration ({title}) {
    return (
        <Layout title ={title}>
             <section className="registration">
      <div className="container">
        <h2 className="form-title title reg">Регистрация</h2>
        <form action="/registration" method="post" className="form registration-form">
          <label className="form-label" htmlFor="reg-name">Введите имя</label>
          <input className="form-input" type="text" name="name" placeholder="Введите имя" id="reg-name" />

          <label className="form-label" htmlFor="reg-mail">Введите e-mail</label>
          <input className="form-input input-mail" required type="email" name="mail" placeholder="mail@mail.com"  id="reg-mail"></input> 

          <label className="form-label" htmlFor="reg-pass"> 
            Придумайте пароль <br />
            
          </label>
          <input
            className="form-input"
            required
            type="password"
            name="password"
            placeholder="Придумайте пароль"
            id="reg-pass"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          />

          <label className="form-label" htmlFor="reg-pass-rep">Повторите пароль</label>

          <input
            className="form-input"
            required type="password"
            name="passwordRepeat"
            placeholder="Повторите пароль"
            id="reg-pas-rep"
          />

          <button type="submit" className="button">Зарегистрироваться</button>
        <div id="messageReg" className='error'/> 
        </form>
      </div>
    </section>


        </Layout>

    )
}