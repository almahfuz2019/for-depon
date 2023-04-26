import React from 'react';
const UserData = (props) => {
     return (
          <div className='student'>
               <h1>ID: {props.id}</h1>
               <p>UserName:{props.username}</p>
               <h5>Name: {props.name}</h5>
          </div>
     );
};
export default UserData;