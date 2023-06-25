import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Mr.Jaiswal</h1>
          <p>Solution To All Your Problem Related Coding</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphic" />

        <div>
          <p>
            Welcome to our innovative code solution webpage! Here, we present a
            comprehensive and user-friendly platform designed to showcase our
            cutting-edge software solutions. Whether you're a developer, a tech
            enthusiast, or a business owner seeking streamlined solutions,
            you've come to the right place.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            we are a team of highly skilled and passionate developers,
            engineers, and tech enthusiasts dedicated to delivering top-notch
            software solutions. With years of experience and expertise in
            various programming languages, frameworks, and technologies, we
            pride ourselves on being at the forefront of innovation in the
            coding world.
          </p>
        </div>
      </div>

      <div className="own">
        <div>
          <h1>our mission</h1>
          <p>
            Our mission is to provide practical and efficient solutions to
            address the challenges faced by developers and businesses in their
            software development endeavors. We understand the importance of
            clean, reliable, and scalable code, and we strive to create
            solutions that not only meet these criteria but also exceed
            expectations.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
