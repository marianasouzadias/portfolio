import perfil from "../../assets/img/perfil.jpg";
import "./HomeStayled.scss"

const Home = () => {

    const download = () =>{
    const link = document.createElement('a');
      link.href= "./curriculo.pdf";
      link.download = 'MarianaDias_Curriculo.pdf';
      link.click();
    };

return (
    <main>
           <img src={perfil} alt="foto de perfil" />
        <section id="home">
            <div>
            <h3>Olá, sou</h3>
            <h1>Mariana Dias</h1>
            <p> uma desenvolvedora FrontEnd</p>
            </div>
            <button onClick={download}>Download CV</button>
        </section>

    </main>
)
}
export default Home;