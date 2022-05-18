import React from "react";
import myPic from "../images/profpic.png";


function About() {
    return (
        <section>
            <h2 id="about">About Me</h2>
            <article className="container">
                <img src={myPic} className='profpic' alt="picture of bryan" />
                <div className='outer'>
                    <p className="aboutme">
                        Originally from the Mitten State, Michigan, I now live in Arizona with my wife and daughter. I am a retired collegiate softball coach and currently work in the golf industry. I am aspiring to apply a new coding backgroud to a future career.
                    </p>
                </div>
            </article>
        </section>
    );
}


export default About;