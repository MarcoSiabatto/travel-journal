import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="footerCard">
      <div className="socialButtons centerM spaceM">
        <SocialIcon bgColor="#918E9B" url="https://github.com/MarcoSiabatto/" />
        <SocialIcon bgColor="#918E9B" url="https://twitter.com/SiabattoMark/" />
        <SocialIcon
          bgColor="#918E9B"
          url="https://www.instagram.com/markzeus96/"
        />
      </div>
      <footer className="centerM">&copy; MSR Development - 2022</footer>
    </div>
  );
}
