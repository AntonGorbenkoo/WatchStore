const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout title={title}>
      <section className="registration">
        <div className="container">
          <h2 className="form-title title reg">Регистрация</h2>
          <form  method="post" className="form registration-form">
            <label className="form-label" htmlFor="reg-name">Введите имя</label>
            <input className="form-input" type="text" name="name" placeholder="Введите имя" id="reg-name" />

            <label className="form-label" htmlFor="reg-mail">Введите e-mail</label>
            <input className="form-input input-mail" required type="email" name="email" placeholder="mail@mail.com" id="reg-mail" />

            <label className="form-label" htmlFor="reg-tel">Введите телефон</label>
            <input className="form-input input-tel" required type="tel" name="phone" placeholder="+7(999)1230000" id="reg-tel" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" />
            <label className="form-label" htmlFor="reg-pass">
              Придумайте пароль
              {' '}
              <br />

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
              required
              type="password"
              name="passwordRepeat"
              placeholder="Повторите пароль"
              id="reg-pas-rep"
            />
            <label className="form-label" htmlFor="secret-name" />
            <input className="form-input input-secret" type="password" name="secretWord" placeholder="Знаешь секрет?" id="reg-secret" />
            <button type="submit" className="button">Зарегистрироваться</button>
            <div id="messageReg" className="error" />
          </form>
          <script defer src="/js/auth/client.registration.js" />
        </div>
      </section>

    </Layout>

  );
};
