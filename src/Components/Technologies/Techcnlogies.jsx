import javascript from "../../assets/img/Techcnlogies/javascript.png";
import html from "../../assets/img/Techcnlogies/html.png";
import css from "../../assets/img/Techcnlogies/css.png";
import sass from "../../assets/img/Techcnlogies/sass.png";
import react from "../../assets/img/Techcnlogies/react.png";
import vite from "../../assets/img/Techcnlogies/vite.png";
import node from "../../assets/img/Techcnlogies/node.png";
import figma from "../../assets/img/Techcnlogies/figma.png";

import "./TechcnlogiesStyle.scss";

const Techcnlogies = () => {
  const technologies = [
    { logo: javascript },
    {  logo: html },
    {  logo: css },
    { logo: sass },
    { logo: react },
    { logo: vite },
    {  logo: node },
    { logo: figma },
  ];

  return (
    <section id="tecnologias">
      <div className="tech-grid">
        {technologies.map((tech) => (
          <figure key={tech.name} className="tech-item">
            <img src={tech.logo} alt="logo das tecnologias" className="image" />
            <figcaption>{tech.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Techcnlogies;
