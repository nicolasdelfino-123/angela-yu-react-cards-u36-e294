import React from "react";
import contacts from "../contacts";
import Cards from "./Cards";
import Avatar from "./Avatar";

function createContacts(contacts) {
  return (
    <Cards
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
      {contacts.map(createContacts)}
      <Avatar img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" />
    </div>
  );
}

export default App;
