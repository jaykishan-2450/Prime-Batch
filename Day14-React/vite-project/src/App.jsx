//re-render===re-run
import { useState } from "react";

const AppForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    if(flag) setFlag(false);
    else setFlag(true);
  };

  if (flag) {
    return (
      <div id="form">
        <label>Name</label>
        <br />
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Email</label>
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleClick}>Submit</button>
      </div>
    );
  } else {
    return(
      <div id="card" >
      <h1>{name}</h1>
      <h3>{email}</h3>
      <button onClick={handleClick}>Regenerate</button>
    </div>
    )
  }
};
// let name="Mohan";
// const [name,setName]=useState("MOHAN");
// console.log("re-rendered",name);
// const handleChange=(e)=>{
//   console.log(e.target.value);
//   setName(e.target.value.toUpperCase());//Noted
//   console.log("updated",name)
// }
//   return(
//     <div>
//       <p>
//         Name
//       </p>
//       <input value={name} placeholder="Please enter here..." onChange={handleChange}/>
//       <h3>Hello {name}</h3>
//     </div>
//   )

export default AppForm;
