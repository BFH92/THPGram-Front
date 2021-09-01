import React from 'react';
import Comments from  '../Comments'
import Description from './Description'
import Picture from './Picture'
import Author from './Author'
const index = () => {
  return (
    <div>
      
      <Picture/>

      <Description/>
      <Author/>
      <Comments/>
    </div>

  );
}

export default index;
