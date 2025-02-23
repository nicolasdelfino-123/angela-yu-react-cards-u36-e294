import React from "react";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.contacts[0].name}</h2>
          <img
            className="img circle-img"
            src={props.contacts[0].imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>{props.contacts[0].phone}</p>
          <p>{props.contacts[0].email}</p>
        </div>
      </div>
      <div>
        <div className="card">
          <div className="top">
            <h2 className="name">{props.contacts[1].name}</h2>
            <img
              className="img circle-img"
              src={props.contacts[1].imgURL}
              alt="avatar_img"
            />
          </div>
          <div className="bottom">
            <p>{props.contacts[1].phone}</p>
            <p>{props.contacts[1].email}</p>
          </div>
        </div>
        <div></div>
      </div>

      <div className="card">
        <div className="top">
          <h2 className="name">{props.contacts[2].name}</h2>
          <img
            className="img circle-img"
            src={props.contacts[2].imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>{props.contacts[2].phone}</p>
          <p>{props.contacts[2].email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
