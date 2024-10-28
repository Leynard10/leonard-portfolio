import React from 'react';

const Hero = () => {
  return (
    <section className = "heroBox" id="hero">
        <img src="dev.png" alt="Ley" style={{ width: '370px', height: '340px' }} />
            <div className="textHero">
              <h1>Hello, I'm Leonard Duero</h1>
                <p>
                    "Welcome to my digital portfolio! <br />I'm a passionate front-end developer and graphic designer <br />
                    dedicated to crafting visually appealing and user-friendly <br />web experiences.<br /><br /> Explore my 
                    projects to see how I combine creativity<br /> and technical skills to bring ideas to life."
                </p>
            </div>
    </section>
  );
};

export default Hero;