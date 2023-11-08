import React, { useState } from "react";
import Contact from "../../utils/Interface";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

const Home: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleAddContact = (newContact: Contact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const addContact = (newContact: Contact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Home;
