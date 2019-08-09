import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {

   const [resource, setResource] = useState('posts');

   return (
      <div>
         <UserList />
         <div>
            <button className="ui button primary" onClick={() => setResource('posts')}>
               Posts
               </button>
            <button className="ui button primary" onClick={() => setResource('todos')}>
               Todos
               </button>
         </div>
         <ResourceList resource={resource} />
      </div>
   );
}

export default App;  