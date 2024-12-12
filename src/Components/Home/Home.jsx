import perfil from "../../assets/img/perfil.jpg";
import github from "../../assets/img/github.jpg";
import linkedin from "../../assets/img/linkedin.jpg";

import "./HomeStyle.scss";

const Home = () => {

    const download = () => {
        const link = document.createElement('a');
        link.href = "./curriculo.pdf";
        link.download = 'MarianaDias_Curriculo.pdf';
        link.click();
    };

    return (
        <main>
            <img src={perfil} alt="foto de perfil" className="perfil" />
            <section id="home">
                <div>
                    <h3>Olá, sou</h3>
                    <h1>Mariana Dias</h1>
                    <h4>uma desenvolvedora FrontEnd</h4>
                </div>
                <button onClick={download}>Download CV</button>
            </section>
            <section className="socialLinks">
                <a href="https://github.com/marianasouzadias" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="logo github" className="logo" />
                </a>
                <a href="https://www.linkedin.com/in/mariana-dias-965916155" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="logo linkedin" className="logo" />
                </a>
            </section>
        </main>
    );
}

export default Home;
