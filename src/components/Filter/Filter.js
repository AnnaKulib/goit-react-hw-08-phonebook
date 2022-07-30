import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/slice';
import s from './Filter.module.css';

const Filter = () => {
  const valueFiltered = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <div>
      <h2 className={s.title}>Your contacts</h2>
      <label className={s.label}>
        <span className={s.text}>Find contact by name</span>
        <input
          className={s.input}
          type="text"
          name="filter"
          value={valueFiltered}
          onChange={onChange}
          // onChange={event => dispatch(changeFilter(event.target.value))}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

export default Filter;
