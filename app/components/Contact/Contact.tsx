import "./Contact.css";

export function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contacto</h2>
          <p>Störtloppsvägen 12</p>
          <p>129 47 Hägersten</p>
          <p>
            <a href="mailto:meisweden@yahoo.com">meisweden@yahoo.com</a>
          </p>
        </div>

        <iframe
          className="contact-map"
          title="Mapa de Misión Evangélica Internacional"
          src="https://www.google.com/maps?q=59.2926002,17.9689139&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
