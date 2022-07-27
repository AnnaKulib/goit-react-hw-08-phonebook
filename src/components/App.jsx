import { useGetContactsQuery } from 'services/contactsApi';
// import { Route, Routes } from "react-router-dom";

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Loader from './Loader';

const App = () => {
  const { isFetching } = useGetContactsQuery();

  return (
    <Section>
      <ContactForm />
      <Filter />
      {isFetching && <Loader />}
      <ContactList />
    </Section>
  );
};

export default App;
