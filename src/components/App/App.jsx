import { useState } from "react";
import { useEffect } from "react";
import "./App.module.css";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

const contactsInfo = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contact");
    return savedContacts !== null ? JSON.parse(savedContacts) : contactsInfo;
  });

  const [searchContacts, setSearchContacts] = useState("");

  const addUser = (newContact) => {
    setContacts((currentContacts) => {
      return [...currentContacts, newContact];
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLocaleLowerCase()
      .includes(searchContacts.toLocaleLowerCase())
  );

  const deleteContacts = (contactId) => {
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={searchContacts} onInput={setSearchContacts} />
      {contacts.length !== 0 ? (
        <ContactList
          contactsInfo={filteredContacts}
          onDelete={deleteContacts}
        />
      ) : (
        <p>Phonebook is empty!</p>
      )}
    </div>
  );
};

export default App;
