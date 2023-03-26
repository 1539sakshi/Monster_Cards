import React from 'react';
import { useState } from 'react';


function SearchBox({searching}) {
    
  return (
    <input type='text' className='SearchBox' placeholder='Search Monsters' onChange={searching} />
  );
}

export default SearchBox;
