import React, { useEffect } from 'react';

function Nav(props) {
    const { currentPage, setCurrentPage } = props;


    useEffect(() => {
      document.title = currentPage
    }, [currentPage]);


    return (
        <nav>
          <div className='pages-tab'>
               
            <div className='nav-tab1'>
                <div className='nav-tab'>
                  <a className={currentPage === 'About' ? 'navActive' : ''}>
                    <span onClick={() => setCurrentPage('About')}>About Me</span>
                  </a>
                </div>
            </div>

            <div className='nav-tab2'>
                <div className='nav-tab'>
                  <a className={currentPage === 'Portfolio' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
                  </a>
                </div>
            </div>

            <div className='nav-tab3'>
                <div className='nav-tab'>
                  <a className={currentPage === 'Contact' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Contact')}>Contact</span>
                  </a>
                </div>
            </div>

            <div className='nav-tab4'>
                <div className='nav-tab'>
                  <a className={currentPage === 'Resume' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Resume')}>Resume</span>
                  </a>
                </div>
            </div>

                
          </div>
        </nav>

    )

}
    

export default Nav;