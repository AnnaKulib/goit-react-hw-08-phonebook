import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperations';
import s from './LoginPage.module.css';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(operations.logIn(form));
    setForm({ email: '', password: '' });
  };

  const { email, password } = form;

  return (
    <div>
      <h1 className={s.title}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={s.textField}>
          <div className={s.textField__floating}>
            <input
              className={s.textField__input}
              id="email"
              type="email"
              name="email"
              pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
              title="Example user@mail.com"
              required
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="email" className={s.textField__label}>
              Email
            </label>
          </div>
          <div className={s.textField__floating}>
            <input
              className={s.textField__input}
              id="password"
              type="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
              autoComplete="off"
            />
            <label htmlFor="password" className={s.textField__label}>
              Password
            </label>
          </div>
          <button className={s.textField__btn} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
