import s from "./ContactForm.module.css";

const ContactForm = ({ handleSubmit, handleChangeInput }) => {
  return (
    <form className={s.conactForm}>
      <label className={s.formLable}>
        Name
        <input type="text" name="name" onChange={handleChangeInput} />
      </label>
      <label className={s.formLable}>
        Number
        <input type="tel" name="phone" onChange={handleChangeInput} />
      </label>
      <button type="submit" onClick={handleSubmit} className={s.formBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
