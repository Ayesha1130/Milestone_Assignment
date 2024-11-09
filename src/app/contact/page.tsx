import React from "react";
import contact from "../custom_css/contact.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={contact.divTag}>
      <h1 className={contact.h1Tag}>Contact Us</h1>
      <div className={contact.divTag2}>
        <h2 className={contact.h2Tag}>Get in Touch with Us!</h2>
        <p className={contact.pTag}>
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to share your love for LusciousLicks, we’re here to connect.
          Reach out to us using the details below, and we’ll get back to you as
          soon as possible.
        </p>
        <div className={contact.divTag3}>
          <button className={contact.buttonTag}>Get In Touch</button>
        </div>

        <div className={contact.divTag4}>
          <Link
            href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"
            target="-blank"
          >
            <FaLinkedin className={contact.iconsTag} />
          </Link>
          <Link href="https://github.com/Ayesha1130" target="-blank">
            <FaGithub className={contact.iconsTag} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
