/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/keyboard background.jpg";

const imageAltText = "dark keyboard background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Software Engingeer student studying at Universidad Nacional del Sur in Bahia Blanca, Buenos Aires, Argentina. I enjoy learning new programming lenguages and design patterns.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["Java", "Python", "Web Designer", "C", "Git and Github", "Spanish and English"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Hello! I am currently dedicated to learning new programming languages, design patterns and trying to improve in general. Among what I have learned, what I am best at is Java and Python, but I am also proficient in C and what the creation of web pages entails (HTML, CSS and Javascript). I am willing to continue learning whatever is necessary depending on the challenge that is presented to me as long as I have the required time.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
