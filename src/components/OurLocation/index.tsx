import { OurLocationContainer } from "./styles";

export function OurLocation() {
  return (
    <OurLocationContainer>
      <h2>Onde estamos</h2>
      <div className="google-map-code">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7069.111541893915!2d-37.896177377461996!3d-6.076053016871361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bad74a9c070cc9%3A0x6708df579764549e!2sCh%C3%A1cara%20Recanto%20de%20Paz!5e0!3m2!1spt-BR!2sbr!4v1726596120934!5m2!1spt-BR!2sbr" 
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          // tabIndex={0}
        />
      </div>
      <div className="google-map-code">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!4v1726595423325!6m8!1m7!1sCAoSLEFGMVFpcE13UUstdTVVX1hhUG1BUE5GU05zUzctUjJQMWFqQVJUaXBzeGhX!2m2!1d-6.076858!2d-37.894634!3f0!4f0!5f0.7820865974627469" 
          width="600" 
          height="450" 
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </OurLocationContainer>
  )
}
