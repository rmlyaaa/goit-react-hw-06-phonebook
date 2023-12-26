import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';
import { Button, Item, List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.values);
  const dispath = useDispatch();

  let visibleContacts = [];
  if (contacts.length > 0) {
    visibleContacts = contacts.filter(contact => {
      const hasContact = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return hasContact;
    });
  }

  return (
    <>
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(contact => (
            <Item key={contact.id}>
              {contact.name}: {contact.number}
              <Button
                type="button"
                onClick={() => dispath(deleteContacts(contact.id))}
              >
                Delete
              </Button>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
