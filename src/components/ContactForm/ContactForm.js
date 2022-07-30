import React from 'react';
import { useState } from 'react';
import {
  useAddContactsMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsOperation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactsMutation();
  const { data } = useGetContactsQuery();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
      // return new Error(`Something wrong, please try again`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      data.find(
        contact => contact.name.toLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contact`);
    }
    addContact({ name, number });
    toast.success('Contact added!');

    setName('');
    setNumber('');
  };

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <div className={s.textField}>
          <div className={s.textField__floating}>
            <input
              className={s.textField__input}
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleInputChange}
              // placeholder="Your Name"
            />
            <label htmlFor="name" className={s.textField__label}>
              Name
            </label>
          </div>
          <div className={s.textField__floating}>
            <input
              className={s.textField__input}
              type="tel"
              id="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleInputChange}
              // placeholder="+XX XXX XX XX"
            />
            <label htmlFor="tel" className={s.textField__label}>
              Phone number
            </label>
          </div>
          <button type="submit" className={s.textField__btn}>
            Add contact
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
