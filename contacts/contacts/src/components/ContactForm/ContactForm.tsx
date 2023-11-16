import React, { useState } from "react";
import Contact from "../../utils/Interface";

interface Props {
  addContact: (contact: Contact) => void;
}

const ContactForm: React.FC<Props> = ({ addContact }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSubmit = () => {
    const newContact = {
      firstName,
      lastName,
      phoneNumber: Number(phoneNumber),
      isFavorite,
    };
    addContact(newContact);

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setIsFavorite(false);
  };

  return (
    <div className="contact-form">
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input
        type="number"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <label>
        Set as Favorite:
        <input type="checkbox" checked={isFavorite} onChange={(e) => setIsFavorite(e.target.checked)} />
      </label>
      <button onClick={handleSubmit}>Add Contact</button>
    </div>
  );
};

export default ContactForm;
