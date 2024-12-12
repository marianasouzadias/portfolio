import jogoMemoria from '../../assets/img/Projects/jogoMemoria.jpg'
import Starbucks from '../../assets/img/Projects/Starbucks.jpg'
import calculadora from '../../assets/img/Projects/calculadora.jpg'
import "./ProjectsStyled.scss"

const projects = [
    {
        title: 'Starbucks',
        description: 'Protótipo do Figma recriado com React e Sas, trazendo uma landing page responsiva e fiel ao design original, com foco em interfaces modernas.',
        link: 'https://starbucks-m5r9itrva-marianas-projects-24de8f38.vercel.app/',
        image: Starbucks,
    },

    {
        title: "Jogo da memoria",
        description: "Criado do zero com React e Sass, este jogo combina nostalgia de Os padrinhos mágicos com a lógica desafiadora, sendo uma ideia totalmente autoral.",
        link: "https://jogo-da-memoria-zeta-ebon.vercel.app/",
        image: jogoMemoria,
    },

    {
      title: "Calculadora",
      description: "Aplicação moderna e funcional, com tema claro/ escuro, cálculos avançados e design elegante, ideal para diferentes necessidades matemáticas.",
      link: "https://jogo-da-memoria-zeta-ebon.vercel.app/",
      image: calculadora,
  },

  {
    title: "Sitema de login",
    description: "Página de login funcional com validação de credenciais, destacando boas práticas em autenficação front-end.",
    
  }
]

const Projects = () => {
  return (
    <section className="projects">
      <h2 className='sub_title'>Meus Projetos</h2>
      <div className="projects__list">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__item"
          >
            <img src={project.image} alt={project.title} className="projects__image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
