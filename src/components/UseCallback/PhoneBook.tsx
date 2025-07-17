import { useCallback, useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void;  
}

const ContactCard = ({ contact, onCall }: ContactProps) => {
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>telefono: {contact.phone}</p>
      <button onClick={() => onCall(contact.phone)}>Call</button>
    </div>
  );
}

export const PhoneBook = ()=> {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: 'Alice', phone: '123-456-7890' },
    { id: 2, name: 'Bob', phone: '987-654-3210' },
    { id: 3, name: 'Charlie', phone: '555-555-5555' },
  ]);
  const [log, setLog] = useState<string>('');

  const makeCall = useCallback((phone: string) => {
    setLog(`Calling ${phone}...`);
  }, []);
  
    const addContact = ()=> {
        const newContact: Contact = {
        id: contacts.length + 1,
        name: `Contact ${contacts.length + 1}`,
        phone: `000-000-000${contacts.length + 1}`
        };
        setContacts([...contacts, newContact]);
    };

  return (
    <div>
      <h2>Phone Book</h2>
      <div>
        {contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
        ))}
      </div>
      <button onClick={addContact}>Add Contact</button>
      <div>
        <h3>Log:</h3>
        <p>{log}</p>
      </div>
    </div>
  );
}
