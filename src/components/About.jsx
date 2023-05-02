import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-5">
        I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology.
        </p>

        <br />

        <p className="text-xl">
        Experienced Full-Stack Web Developer with over 8 years of experience in developing and maintaining web applications.
        Proficient in both front-end and back-end development, with expertise in JavaScript, React, Node.js, and SQL. Skilled in project management, team leadership, and
        communication. Passionate about creating user-friendly and efficient web applications that meet the needs of clients and end-users. Proven track record of delivering high-quality projects on time and
        within budget. Continuously learning and staying up-to-date with the latest technologies and trends in web development.
        </p>
      </div>
    </div>
  );
};

export default About;
