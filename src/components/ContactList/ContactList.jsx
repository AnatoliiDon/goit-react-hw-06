import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const selectNameFilter = useSelector(state => state.filter.filters.name);
  const filteredUsers = contacts.filter(user =>
    user.name
      .toLocaleLowerCase()
      .includes(selectNameFilter.toLocaleLowerCase().trim())
  );

  return (
    <ul className={css.contactList}>
      {filteredUsers.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
