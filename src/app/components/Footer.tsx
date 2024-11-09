import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import footer from "../custom_css/footer.module.css";

const Footer = () => {
  return (
    <div className={footer.divTag1}>
      <h1 className={footer.h1Tag}>Follow Us</h1>
      <div className={footer.divTag2}>
        <Link
          href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"
          target="-blank"
        >
          <FaLinkedin className={footer.iconsTag} />
        </Link>
        <Link href="https://github.com/Ayesha1130" target="-blank">
          <FaGithub className={footer.iconsTag} />
        </Link>
      </div>
      <p className={footer.pTag}>LusciousLicks</p>
      <p className={footer.pTag}>�� 2024 All rights reserved.</p>
    </div>
  );
};

export default Footer;
