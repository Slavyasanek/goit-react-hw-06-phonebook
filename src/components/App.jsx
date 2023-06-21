import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {

  // const filterContacts = () => {
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  // }

  return (
    <div>
      <Section
        sectionType="form"
        title="Phonebook">
        <ContactForm />
      </Section>
      <Section
        sectionType="phonebook"
        title="Contacts">
            <Filter/>
            <ContactList/>
      </Section>
    </div>
  );
}
