import s from "./ContactForm.module.css";

const ContactForm = ({
  handleAddContact,
  handleChangeInput,
  newContactData,
}) => {
  return (
    <form className={s.conactForm}>
      <label className={s.formLable}>
        Name
        <input
          type="text"
          name="name"
          onChange={handleChangeInput}
          value={newContactData.name}
        />
      </label>
      <label className={s.formLable}>
        Number
        <input
          type="tel"
          name="number"
          onChange={handleChangeInput}
          value={newContactData.number}
        />
      </label>
      <button type="submit" onClick={handleAddContact} className={s.formBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
