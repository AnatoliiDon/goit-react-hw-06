import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as yup from 'yup';
const initialValues = {
  name: '',
  number: '',
  id: '',
};

const regex = /^(?=.*?[1-9])[0-9()-]+$/;

const addProfileSchema = yup.object({
  name: yup
    .string()
    .min(3, 'name should have at least 3 symbols')
    .max(50, 'name should have less than 50 symbols')
    .required('Name is reqiered'),
  number: yup
    .string()
    .required('phone is reqiered')
    .min(3, 'too short!')
    .max(50, 'too long!')
    .matches(regex, 'enter valid number'),
});

const ContactForm = ({ addProfile }) => {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    addProfile(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addProfileSchema}
    >
      <Form className={css.formField}>
        <label className={css.inputField}>
          <span className={css.inputTitle}>name</span>
          <Field
            className={css.inputArea}
            type="text"
            name="name"
            placeholder="Vasil Hmara"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>

        <label className={css.inputField}>
          <span className={css.inputTitle}>number</span>
          <Field
            className={css.inputArea}
            type="text"
            name="number"
            placeholder="xxx-xx-xx"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;