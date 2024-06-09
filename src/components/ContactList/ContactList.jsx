import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactsInfo, onDelete }) => {
  return (
    <ul className={css.list}>
      {contactsInfo.map((item) => (
        <li key={item.id} className={css.item}>
          <Contact contactInfo={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
