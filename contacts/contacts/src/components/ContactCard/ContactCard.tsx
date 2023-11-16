import React from "react";
import Contact from "../../utils/Interface";

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <div>
      <p>
        {contact.firstName} {contact.lastName}
      </p>
      <p>{contact.phoneNumber}</p>
      {contact.isFavorite && <span></span>}
    </div>
  );
};

export default ContactCard;
