import React from "react";
import about from "../custom_css/about.module.css";

const About = () => {
  return (
    <div className={about.mainTag}>
      <h1 className={about.h1Tag}>About Us</h1>
      <div className={about.mainTag2}>
        <p className={about.pTag}>
          <span className={about.spanTag}>Sweet Dreams, Luscious Licks</span>, 
          At LusciousLicks, we create more than just ice cream – we craft a mouthwatering experience that leaves you craving for more. Each scoop is a burst of flavor, texture, and joy, made with the finest natural ingredients that awaken your senses and delight your taste buds.
        </p>
        <p className={about.pTag}>
        Whether you're a fan of the timeless classics like Chocolate and Vanilla, or you're in the mood for something daring and new, we have something to satisfy every sweet tooth. We believe in the magic of indulgence, and each cone or cup is designed to bring a smile to your face and a moment of happiness to your day.
        </p>
        <p className={about.pTag}>
        Our mission is simple: to bring you the freshest, most delicious ice cream that adds a little extra sweetness to life. At LusciousLicks, it's not just about enjoying ice cream – it's about making memories, one delicious bite at a time.
        </p>
        <p className={about.pTag}>
        At LusciousLicks, we believe ice cream is about more than just taste – it’s about creating happy moments. Every scoop is made with the finest ingredients and a touch of creativity, delivering rich flavors that bring people together. Whether it’s a treat for yourself or a way to celebrate, we’re here to make life a little sweeter, one delicious bite at a time.


        </p>
        <p className={about.pTag}>
        LusciousLicks – Where happiness and indulgence are always just a scoop away
        </p>
        <div className={about.imgTag}>
          <img
            src="/images/two2.avif"
            alt="About Me"
            className={about.img}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
