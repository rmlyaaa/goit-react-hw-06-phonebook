import { Formik } from 'formik';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contactsSlice';
import { Button, Label, StyledField, StyledForm } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispath = useDispatch();

  const onAdd = values => {
    const { name } = values;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.failure(`${name} is already in contacts`);
    }
    dispath(addContacts(values));
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" type="text" required />
          </Label>

          <Label>
            Number
            <StyledField name="number" type="tel" required />
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
