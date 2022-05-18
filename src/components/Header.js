import React, { useState } from 'react';
import Nav from './nav';

function Header(props) {
    const [categories] = useState([
        { name: "About", href: "#about-me" },
        { name: "Projects", href: "#projects" },
        { name: "Resume", href: "#resume" },
        { name: "Contact", href: "#contact" },
      ]);
        
return (
    <header className='container'>
                {/* className='flex-row justify-space-between' */}
       <div className='name-header'>
           <h1>Bryan <span className='bryans-header'>Rourke</span></h1>
           {/* <span className='header-sub'>Aspiring Web Developer</span> */}
       </div> 
       <div className='navigation'>
           <Nav
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
           ></Nav>
       </div>
    </header>
  );
}


export default Header;