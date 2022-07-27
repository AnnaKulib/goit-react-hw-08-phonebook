import { useSelector } from 'react-redux';
import { getFilter } from 'components/redux/selectors';
import { useGetContactsQuery } from 'services/contactsApi';
import ContactItem from 'components/ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const { data } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  function dataSort(a, b) {
    let nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  }

  const filterAndSortContacts = () => {
    return (
      data &&
      data
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .sort(dataSort)
    );
  };

  const contacts = filterAndSortContacts();

  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {contacts.map(({ id, name, phone }) => (
            <ContactItem key={id} contact={{ id, name, phone }} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
