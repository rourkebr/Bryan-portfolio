import React from 'react';


function Resume() {
    return (
        <section>
            <h2 className='res-header'>Bryan's Resumer</h2>
            <p className='res-link'>If you would like to look over my resume click here! <a className='dl-link' href={process.env.PUBLIC_URL + '/images/BryanRourke_resume'}>Link.</a></p>
        <div>
            <h3 className='res-subhead'>Check out my skills</h3>
        
<ul className='res-list'>
    <li>HTML</li>
    <li>CSS</li>
    <li>Git</li>
    <li>JavaScript</li>
    <li>Various APIs</li>
    <li>Bootstrap</li>
    <li>Handlebars</li>
    <li>SQL</li>
    <li>Sequelize</li>
    <li>Node</li>
    <li>JQuery</li>
    <li>MongoDB</li>
    <li>Express</li>
</ul>
</div>
        </section>
    )};

    export default Resume;