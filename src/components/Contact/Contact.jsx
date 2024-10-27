import css from './Contact.module.css';
const Contact = ({ name, number, id, deleteProfile }) => {
  return (
    <div className={css.contactContainer}>
      <div>
        <p>🦸‍♂️ {name}</p>
        <p>📱{number}</p>
      </div>
      <button
        type="button"
        className={css.contactBtn}
        onClick={() => deleteProfile(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
