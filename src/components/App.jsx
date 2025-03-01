import React from "react";
import contacts from "../contacts";
import Cards from "./Cards";
import Avatar from "./Avatar";

function createContacts(contacts) {
  return (
    <Cards
      id={contacts.key}
      key={contacts.key}
      nombre={contacts.name}
      img={contacts.imgURL}
      phone={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar className="nico" img="../../public/nico.jpeg" />
      {contacts.map(createContacts)}
    </div>
  );
}

export default App;
