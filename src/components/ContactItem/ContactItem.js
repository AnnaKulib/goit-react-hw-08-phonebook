import PropTypes from 'prop-types';

import { useDeleteContactsMutation } from 'redux/contacts/contactsOperation';
import s from './ContactItem.module.css';
import { toast } from 'react-toastify';

function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactsMutation();
  const deleteNumber = () => {
    deleteContact(id);
    toast.success('Contact deleted!');
  };

  return (
    <li className={s.item}>
      <p>{name}</p>
      <div className={s.thumb}>
        <p>{number}</p>
        <button className={s.button} type="button" onClick={deleteNumber}>
          {isLoading ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
