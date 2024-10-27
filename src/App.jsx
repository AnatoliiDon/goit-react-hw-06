import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from './redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const selectContacts = useSelector(state => {
    return state.contactsData.contacts.items;
  });
  const selectNameFilter = useSelector(state => state.filter.filters.name);
  const onAddProfile = formData => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    const action = addContact(finalUser);
    dispatch(action);
  };

  // const onDeleteProfile = profileId => {
  //   console.log(profileId);
  //   const action = deleteContact(profileId);
  //   dispatch(action);
  // };

  const filteredUsers = selectContacts.filter(user =>
    user.name
      .toLocaleLowerCase()
      .includes(selectNameFilter.toLocaleLowerCase().trim())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addProfile={onAddProfile} />
      <SearchBox filter={selectNameFilter} />
      <ContactList
        contactInfo={filteredUsers}
        // deleteProfile={onDeleteProfile}
      />
    </div>
  );
};

export default App;
