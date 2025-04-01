//re-render===re-run
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e);

    if (e.target.userName.value.length < 2 ) {
      alert("Invalid Name");
    } else if(e.target.userEmail.value.length < 5){
      alert("Invalid email");

    } else {
      setEmail(e.target.userEmail.value);
      setName(e.target.userName.value);
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      {isSubmitted == false ? (
        <form onSubmit={handleSubmit} id="card">
          <label>Name</label>
          <br />
          <br />
          <input type="text" name="userName" placeholder="Type here..." />
          <br />
          <br />
          <label>Email</label>
          <br />
          <br />
          <input type="text" name="userEmail" placeholder="type here..." />
          <br />
          <br />
          <button>Submit</button>
        </form>
      ) : (
        <section id="card">
          <h2>Name: {name}</h2>
          <h4>Email: {email}</h4>
        </section>
      )}
    </div>
  );
};

export default App;
