import javascript from "../../assets/img/Techcnlogies/javascript.png";
import html from "../../assets/img/Techcnlogies/html.png";
import css from "../../assets/img/Techcnlogies/css.png";
import sass from "../../assets/img/Techcnlogies/sass.png";
import react from "../../assets/img/Techcnlogies/react.png";
import vite from "../../assets/img/Techcnlogies/vite.png";
import node from "../../assets/img/Techcnlogies/node.png";
import figma from "../../assets/img/Techcnlogies/figma.png";

import "./AboutStyle.scss";
import "../Technologies/TechnologiesStyle.scss";

const About = () => {
  const technologies = [
    { logo: javascript },
    { logo: html },
    { logo: css },
    { logo: sass },
    { logo: react },
    { logo: vite },
    { logo: node },
    { logo: figma },
  ];

  return (
    <main id="sobre" className="main">
      <h2>Sobre mim: </h2>
      <div className="about-container">
        <section>
          <p>
            <span>Formada</span>em <span>Marketing</span> e atualmente estudante
            de <span>Análise de Desenvolvimento de Sistemas. </span>Minha
            trajetória tem duas áreas que se complementam: O{" "}
            <span>Desenvolvimento</span> e a<span>Estratégia de Produto.</span>
            Acredito que programar vai muito além de escrever código é entender
            a <span>Experiência do usuário</span>, o impacto do{" "}
            <span>design</span> e a<span>funcionalidade do produto</span> como
            um todo. Busco minha<span> primeira oportunidade</span>
            na área, trazendo uma visão que combina{" "}
            <span> Desenvolvimento</span>
            com <span> Análise de mercado.</span> Tenho experiência com{" "}
            <span>JavaScript</span>, <span>React</span>, <span>APIs REST</span>, entre outras
            tecnologias, e sigo aprimorando meus conhecimentos em
            <span>MySql</span>,<span> Prisma</span> e <span>Docker</span>.🚀
          </p>
        </section>

        <section id="tecnologias">
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <figure key={index} className="tech-item">
                <img
                  src={tech.logo}
                  alt="Logo da tecnologia"
                  className="image"
                />
              </figure>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
export default About;
