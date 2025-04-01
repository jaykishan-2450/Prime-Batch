//re-render===re-run
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userDetails, setUserDetails] = useState({
    name:"jay",
    email:"jay@abes.ac.in",
    phoneNumber:"8341028433",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  console.log(userDetails);

  return (
    <div>
      {isSubmitted == true ? (
        <section id="card">
            {
                Object.entries(userDetails).map(([key,val])=>{
                    return(
                        <h3 key={key}>
                            {key}::{val}
                        </h3>
                    )
                })
            }
          {/* <h2>Name: {userDetails.name}</h2>
          <h4>Email: {userDetails.email}</h4>
          <h4>Phone Number : {userDetails.phoneNumber}</h4> */}
        </section>
      ): (
        <section id="card">
          <label>Name</label>
          <br />
          <br />
          <input type="text" value={userDetails.name} name="userName" placeholder="Type here..." onChange={(e)=>{
            setUserDetails({...userDetails,name:e.target.value})
          }} />
          <br />
          <br />
          <label>Email</label>
          <br />
          <br />
          <input type="text" value={userDetails.email} name="userEmail" placeholder="type here..." onChange={(e)=>{
            setUserDetails({...userDetails,email:e.target.value}) }} />
          <br />
          <br />
          <label>Name</label>
          <br />
          <br />
          <input type="text" value={userDetails.phoneNumber} name="userName" placeholder="Type here..." onChange={(e)=>{
            setUserDetails({...userDetails,phoneNumber:e.target.value})
          }} />
          <button onClick={handleSubmit}>Submit</button>
        </section>
      ) }
    </div>
  );
};

export default App;
