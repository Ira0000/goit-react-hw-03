import Contact from "../Contact/Contact";
import s from "./Contact.List.module.css";

const ContactList = ({ contactData, deleteContact }) => {
  return (
    <ul className={s.contactCard}>
      {contactData.map((data) => {
        return (
          <li key={data.id}>
            <Contact
              id={data.id}
              name={data.name}
              number={data.number}
              deleteContact={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
