import { useDeleteContactMutation } from 'services/contactsApi';
import s from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li className={s.item}>
      <p>{name}</p>
      <div className={s.thumb}>
        <p>{phone}</p>
        <button
          className={s.button}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
