import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={css.cardList}>
        {contacts.map((item) => {
          return (
            <li className={css.cardItem} key={item.id}>
              <Contact
                id={item.id}
                name={item.name}
                number={item.number}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
