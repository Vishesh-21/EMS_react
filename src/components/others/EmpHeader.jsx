import React, { useState, useEffect } from 'react';

export const EmpHeader = (props) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (!props.data) {
      setUserName("Admin");
    } else {
      setUserName(props.data.firstName);
    }
  }, [props.data]); 

  const handleLogOut = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('');
  }

  return (
    <>
      <header className='flex items-center justify-between sticky top-0 left-0'>
        <h1 className='text-l'>
          Hello ,<br />
          <span className='text-xl font-bold'>{userName}✌️</span>
        </h1>
        <button className='px-6 py-2 rounded-full font-semibold bg-red-600' onClick={handleLogOut}>
          Log Out
        </button>
      </header>
    </>
  );
};
