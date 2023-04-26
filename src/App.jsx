import React, { useEffect, useState } from 'react';
import "./App.css";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import Person from './Person';
const App = () => {
const auth=getAuth(app);
const provider = new GoogleAuthProvider();
const handleGoogleSignIn=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
   
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    console.log(error);
  });
}
  const [users,setUsers]=useState([]);
  useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/comments")
  .then(res=>res.json())
  .then(data=>setUsers(data))
  },[])
  return (
    <div className='container-fluid'>
      <button onClick={handleGoogleSignIn}>Google sign in</button>
      <Person name="Abdullah" age="15" District="Dhaka"/>
     <h1>{users.length}</h1>
     {
      users.map(user=>
        <div className='student'>
          <h4>{user.id}</h4>
          <h4>{user.name}</h4>
          <h4>{user.email}</h4>
          <p>{user.body}</p>
        </div>

        )
     }
      </div>
  );
};
export default App;