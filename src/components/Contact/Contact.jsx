import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ contactInfo: { id, name, number }, onDelete }) => {
  const formatNumber = (inputNumber) => {
    const pattern = /(\d{3})(\d{2})(\d{2})/;
    const formatedNumber = inputNumber.replace(pattern, "$1-$2-$3");
    return formatedNumber;
  };

  return (
    <div className={css.item}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {formatNumber(number)}
        </p>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
