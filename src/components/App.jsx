import { useEffect, useState } from "react";
import initialContacts from "./contacts.json";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [contacts, setContact] = useState(() => {
    const savedContactBook = window.localStorage.getItem("saved-contacts");
    if (savedContactBook) {
      return JSON.parse(savedContactBook);
    }
    return initialContacts;
  });

  const [filter, setFilter] = useState("");

  const addContact = (value) => {
    setContact((prevContact) => {
      const newContact = { id: nanoid(), ...value };
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const searchContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={searchContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
