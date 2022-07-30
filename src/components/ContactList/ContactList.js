import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { useGetContactsQuery } from 'redux/contacts/contactsOperation';
import ContactItem from 'components/ContactItem';
import s from './ContactList.module.css';

function ContactList() {
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
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
}

export default ContactList;
