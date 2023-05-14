import React from 'react'
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory-item.component';

function Home() {
    
      return (
        <div>
          <Directory />
        </div>
      );
}

export default Home
