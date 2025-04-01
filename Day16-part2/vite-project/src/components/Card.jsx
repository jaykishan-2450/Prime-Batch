import React, { useState,useEffect } from 'react';
// import "./card.css";
const Card = ({name,email,githubLink}) => {
  const res=githubLink.split("/");
  const userId=res[res.length-1];
  // console.log(userId);
  // console.log(res);

  const [data,setData]=useState({});

  const getData= async ()=>{
    const resp=await fetch(`https://api.github.com/users/${userId}`);
    const temp=await resp.json();
    console.log(temp)
    setData(temp);
  }

  useEffect(()=>{getData()},[]);


  return (
    <div className='card'>
        <h4>Name: {name}</h4>
        <h5>{email}</h5>
        <a href={githubLink} target="_blank">View Profile</a>
        <img width="125" src={data.avatar_url} alt="ho nhi rha" />
    </div>
  )
}

export default Card;
