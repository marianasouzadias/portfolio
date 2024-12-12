import celular from "../../assets/img/celular.png";
import email from "../../assets/img/email.png";
import lugar from "../../assets/img/lugar.png";

import "./FooterStyled.scss";

const Footer = () => {
  return (
    <footer id="Footer" className="container">
      <section className="contact-info">
        <ul>
          <li>
            <figure>
              <img src={email} alt="Ícone de e-mail" />
              <figcaption>
                <a href="mailto:mariana.mkt.dias@gmail.com">mariana.mkt.dias@gmail.com</a>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={lugar} alt="Ícone de localização" />
              <figcaption>Rio de Janeiro</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={celular} alt="Ícone de celular" />
              <figcaption>
                <a href="tel:+5521976200316">(21) 97620-0316</a>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;