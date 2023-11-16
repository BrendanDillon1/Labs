import React from "react";
import Contact from "../../utils/Interface";
import ContactCard from "../ContactCard/ContactCard";

interface ContactListProps {
    contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
    return (
        <div>
            <h2>Contacts</h2>
            {contacts.map((contact) => (
                <ContactCard key={contact.phoneNumber} contact={contact} />
            ))}
        </div>
    );
};
export default ContactList;
