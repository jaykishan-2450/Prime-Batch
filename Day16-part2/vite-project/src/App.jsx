import React,{useState} from 'react';
import P from "papaparse";
import Card from './components/Card';

const App = () => {
  
  const [profiles ,setProfiles]=useState([]);

  const handleData=(res)=>{
    const {data ,errors} =res;
    console.log(res);
    if(errors.length>0){
      alert("Error in parsing the file");
    }else{
    setProfiles(data);
    }
  }

  const handleFileUpload=(e)=>{
    const file=e.target.files[0];
    P.parse(file,{header:true, complete: handleData});
    console.log(e);
  }
  return (
    <div>
      <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      </div>
      <div>
        {
          profiles.map((ele)=>{
            return (<Card
              name={ele.name}
              email={ele.email}
              githubLink={ele.githubLink}
            />
            )
          })
        }
      </div>
      
      
    </div>
  )
}

export default App
