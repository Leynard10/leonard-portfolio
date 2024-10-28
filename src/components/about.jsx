import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className='ab'>
        <h1 className="h1About">
            About Me
        </h1>
        <p className="pAbout">
        "As a passionate front-end developer and graphic designer, <br />
        I'm driven by creating visually stunning and user-friendly digital experiences.<br /> 
        With a keen eye for detail and a love for crafting intuitive interfaces,<br /> 
        I'm skilled in translating design concepts into functional,<br /> responsive websites. <br /><br />
        My passion lies in blending creativity with technical <br />expertise to deliver exceptional results <br />
        that exceed expectations."
        </p>
      </div>
        

        <div className="image-container">
          <img src="web-developer-working-on-project-6343303-5242452.webp" alt="Leonard Duero" style={{ width: '370px', height: '340px' }} />
        </div >
    </section>
  );
};

export default About;