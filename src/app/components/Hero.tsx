"use client";
import Link from "next/link";
import hero from "../custom_css/hero.module.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className={hero.sectionTag}>
      <h1 className={hero.h1Tag}>
        <span className={hero.spanTag}>Our Valueble ! </span>
        Customer
      </h1>
      <h2 className={hero.h2Tag}>
        <span className={hero.spanTag}>Welcome to LusciousLicks</span>
        <Typewriter
          options={{
            strings: [
              "Discover our delectable ice creams",
              "Indulge in our mouth-watering creations",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <p className={hero.pTag}>
        "Swing by our shop and indulge in our mouthwatering creations. Don’t
        forget to check out our seasonal specials and new flavors that are sure
        to tantalize your taste buds!"
      </p>

      <img src="/images/three.avif" alt="" className={hero.imgTag} />
      <button className={hero.buttonTag}>
        <Link href="/contact">Contact Us</Link>
      </button>
    </section>
  );
};

export default Hero;
