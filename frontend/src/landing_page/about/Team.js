import React from 'react';

function Team() {
    return ( 

     <div className="container mt-5">
        <div className='row p-5 mt-5 mb-5 border-top'>
        <h3 className="text-center mb-3">About the Developer</h3>
        </div>
    <div className="row justify-content-center">

       <div className='col-6 p-3 text-center'>
          <img src='media/images/mdsitare.png' style={{ borderRadius:"10%", width:"40%"}} ></img>
          <h4 className='mt-5'>Md Sitare</h4>
          </div>    
    <div className="col-md-6 p-4  bg-white">
      <p>
        Hi, I'm <strong>MD SITARE</strong> — a full-stack web developer passionate about building scalable and user-friendly applications. This project is a personal learning initiative inspired by Zerodha’s trading dashboard. It helped me explore technologies like <strong>React</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and secure <strong>authentication flows</strong>.
      </p>
      <p>
        My goal was to understand how real-world financial platforms work and to recreate key features such as equity tracking, login/signup flows, and responsive UI design. This project is <em>not affiliated with Zerodha</em> and is built purely for educational purposes.
      </p>
      <p>
        I’m always exploring new technologies and refining my development skills through hands-on projects.
      </p>
    </div>
  </div>
</div>

     );
}

export default Team;