import { Link } from 'react-scroll';
import "./HeaderStyled.scss";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="home" smooth={true} duration={500} className='link'>Home</Link>
                    </li>
                    <li>
                    <Link to="sobre" smooth={true} duration={500} className='link'>Sobre</Link>
                    </li>
                    <li>
                    <Link to="tecnologias" smooth={true} duration={500} className='link'>Tecnologias</Link>
                    </li>
                    <li>
                    <Link to="projetos" smooth={true} duration={500} className='link'>Projetos</Link>
                    </li>
                </ul>
            </nav>
        </header>
        

    )
}
export  default Header;