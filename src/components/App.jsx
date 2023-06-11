import { useEffect, useState } from "react";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const localContacts = localStorage.getItem(CONTACTS_KEY);
  const [contacts, setContacts] = useState(localContacts ? JSON.parse(localContacts) : []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
  }, [contacts])

  const addContact = data => {
    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, data])
  }

  const deleteContact = e => {
    setContacts(contacts.filter(contact => contact.id !== e.target.closest('li').dataset.contact))
  }
  const filterChange = ({ target }) => {
    setFilter(target.value);
  }

  const filterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <div>
      <Section
        sectionType="form"
        title="Phonebook">
        <ContactForm
          saveContact={addContact} />
      </Section>
      <Section
        sectionType="phonebook"
        title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter
              filterChange={filterChange}
              filterValue={filter} />
            <ContactList
              contacts={filter === ''
                ? contacts
                : filterContacts()}
              deleteContact={deleteContact} />
          </>
        ) : (
          <p>No contacts added yet</p>
        )}
      </Section>
    </div>
  );
}
