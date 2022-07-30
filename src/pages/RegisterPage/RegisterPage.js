import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperations';
import s from './RegisterPage.module.css';

function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(operations.register(form));
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;

  return (
    <>
      <h1 className={s.title}>Register</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <div className={s.textField}>
          <div className={s.textField__floating}>
            <input
              className={s.textField__input}
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label htmlFor="name" className={s.textField__label}>
              Name
            </label>
          </div>

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
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterPage;
