import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import { useState } from "react";
import "./App.css";

const defaultContactData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contactData, setContactData] = useState(defaultContactData);
  const [searchName, setSearchName] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSearchInput = (e) => {
    setSearchName(e.target.value);
  };
  // console.log(searchName);
  const filteredContactData = contactData.filter((contact) =>
    contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const deleteContact = (id) => {
    setContactData((prev) => prev.filter((contact) => contact.id !== id));
    // console.log(`I want to delete this contact: ${id}`);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
      />
      <SearchBox handleSearchInput={handleSearchInput} />
      <ContactList
        contactData={filteredContactData}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
