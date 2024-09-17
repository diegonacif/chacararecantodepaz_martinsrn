import { Envelope, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { FooterContainer, FooterFoot, FooterInner, FooterSocials } from "./styles";
import { useWindowSize } from "usehooks-ts";
import chacaraLogo from "../../assets/recanto-logo-preto.png";

export function Footer() {
  const { width } = useWindowSize()
  const currentyear = new Date().getFullYear();

  const instagramAddress = "http://www.instagram.com/chacararecantodepaz_martinsrn";
  // const facebookAddress = "https://www.facebook.com/profile.php?id=61559433050819";
  const mailAddress = "mailto:beetakes.drones@gmail.com";

  const whatsappNumber = "558496528000"
  // const whatsappMessage = "Olá! Gostaria de solicitar um orçamento."

  const whatsappAddress = width >= 1024 ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  return (
    <FooterContainer>
      <FooterInner>
        <img src={chacaraLogo} alt="Flor de Lotus logo" id="chacaraLogo-footer" />
        <FooterSocials>
          <WhatsappLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(whatsappAddress)}
            id="whatsapp-logo"
          />
          <InstagramLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(instagramAddress)}
            id="instagram-logo"
          />
          {/* <FacebookLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(facebookAddress)}
            id="facebook-logo"
          />           */}
          <Envelope 
            size={32} 
            weight="regular" 
            onClick={() => window.open(mailAddress)}
            id="mail-logo"
          />
        </FooterSocials>
      </FooterInner>
      <FooterFoot>
        <span id="rights-reserved">© {currentyear} Chácara Recanto de Paz -  Todos os direitos reservados</span>
        <span id="developed-by" onClick={() => window.open('https://www.linkedin.com/in/diegonacif-dev/')}>Desenvolvido por Diego Nacif</span>
      </FooterFoot>
    </FooterContainer>
  )
}