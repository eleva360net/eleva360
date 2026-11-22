import { Check, Globe, MapPin, MessageCircle, Search, ArrowRight, Workflow } from "lucide-react";
import businessPhoto from "../assets/menu-plato-premium.webp";
import cafePhoto from "../assets/hero-building.webp";
import reservationPhoto from "../assets/reserva-cafe.jpg";
import inquiriesPhoto from "../assets/gestion-consultas.jpg";
import brandLogo from "../assets/LogoEleva360-transparente.webp";
import "./business-sections.css";

const capabilities = [
  {
    title: "Presencia digital",
    description: "Fortalecemos tu presencia en Google y redes sociales para que más personas encuentren tu negocio y confíen en lo que ofreces.",
    tools: "Google · Redes sociales · Identidad · Contenido",
    icon: MapPin,
    visual: "presence",
  },
  {
    title: "Web y experiencias",
    description: "Espacios claros para mostrar lo que ofreces y facilitar una acción.",
    tools: "Sitios web · Cartas digitales · Catálogos",
    icon: Globe,
    visual: "web",
  },
  {
    title: "Atención y contacto",
    description: "Consultas más simples y respuestas que ayuden a avanzar.",
    tools: "WhatsApp Business · Reservas · Formularios",
    icon: MessageCircle,
    visual: "contact",
  },
  {
    title: "Procesos y automatización",
    description: "Simplificamos tu operación con automatizaciones y, cuando tiene sentido, software desarrollado a medida para tu negocio.",
    tools: "Integraciones · Automatizaciones · Software a medida · Seguimiento",
    icon: Workflow,
    visual: "process",
  },
] as const;

const capabilityPhotos = {
  presence: cafePhoto,
  web: businessPhoto,
  contact: reservationPhoto,
  process: inquiriesPhoto,
} as const;

function CapabilitySketch({ kind }: { kind: (typeof capabilities)[number]["visual"] }) {
  return (
    <div className={`business-sketch sketch-${kind}`} aria-hidden="true">
      <div className="sketch-caption">
        <span>
          {
            {
              presence: "Perfil de negocio",
              web: "Carta digital",
              contact: "Reserva por chat",
              process: "Flujo de consultas",
            }[kind]
          }
          <small className="sketch-business-name">Café Pacífico</small>
        </span>
        <img
          className="sketch-thumbnail"
          src={capabilityPhotos[kind]}
          alt=""
          width={56}
          height={56}
          loading="lazy"
        />
        
      </div>
      {kind === "presence" && (
        <>
          <div className="sketch-search">
            <Search /> Cafetería en tu zona
          </div>
          <div className="sketch-result">
            <div>
              <b>Café Pacífico</b>
              <span>Cafetería · Información y horarios</span>
            </div>
          </div>
          <div className="sketch-place-actions">
            <span>
              Cómo llegar <ArrowRight />
            </span>
            <span>Contacto</span>
          </div>
        </>
      )}
      {kind === "web" && (
        <>
          <div className="sketch-browser">
            <span />
            <span />
            <span />
            <small>carta · menú del día</small>
          </div>
          <div className="sketch-page">
            <div>
              <b>Pastas del día</b>
              <p>Platos preparados al momento.</p>
              <span>
                Ver la carta <ArrowRight />
              </span>
            </div>
          </div>
        </>
      )}
      {kind === "contact" && (
        <>
          <div className="sketch-message">Quiero reservar una hora.</div>
          <div className="sketch-reply">
            Elige el horario que te acomode.
            <Check />
          </div>
          <div className="sketch-times">
            <span>10:00</span>
            <span>12:30</span>
            <span>16:00</span>
          </div>
        </>
      )}
      {kind === "process" && (
        <>
          <ol className="sketch-flow">
            <li>
              <MessageCircle />
              <span>
                <b>Recibir consulta</b>
                <small>Formulario o mensaje</small>
              </span>
            </li>
            <li>
              <Workflow />
              <span>
                <b>Organizar</b>
                <small>Registrar en un solo lugar</small>
              </span>
            </li>
            <li>
              <Check />
              <span>
                <b>Dar seguimiento</b>
                <small>Saber qué falta responder</small>
              </span>
            </li>
          </ol>
        </>
      )}
    </div>
  );
}

export function BusinessSections({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <div className="business-content">
      <section
        id="capacidades"
        className="business-capabilities business-section"
        aria-labelledby="capabilities-title"
      >
        <div className="business-container">
          <div className="business-intro">
            <div>
              <p className="business-kicker">Qué podemos hacer</p>
              <h2 id="capabilities-title">
                Soluciones para que
                <br />
                tu negocio <em>avance.</em>
              </h2>
            </div>
            <p className="business-lead">
              Mejoramos cómo encuentran tu negocio, cómo descubren lo que ofreces y cómo te contactan.
              Así facilitamos que más oportunidades se conviertan en ventas, mientras
              simplificamos tu operación.
            </p>
          </div>
          <div className="business-capability-grid">
            {capabilities.map(({ title, description, tools, icon: Icon, visual }) => (
              <article className="business-capability" key={title}>
                <CapabilitySketch kind={visual} />
                <div className="business-capability-copy">
                  <Icon className="business-capability-icon" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p className="business-tools">{tools}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="business-demo-note">
            Esquemas de funcionamiento. La solución se diseña para cada negocio.
          </p>
        </div>
      </section>

      <section
        id="como-funciona"
        className="business-method business-section"
        aria-labelledby="method-title"
      >
        <div className="business-container business-method-layout">
          <div className="business-method-copy">
            <p className="business-kicker">Antes de empezar</p>
            <h2 id="method-title">
              Antes de implementar,
              <br />
              <em>todo claro.</em>
            </h2>
            <p className="business-lead">
              Te explicamos qué conviene resolver primero y cómo lo llevaríamos a cabo. El alcance,
              los plazos y la inversión quedan definidos antes de comenzar.
            </p>
          </div>
          <div className="business-proposal" role="group" aria-label="Qué incluye tu propuesta">
            <div className="proposal-top">
              <img
                className="proposal-logo"
                src={brandLogo}
                alt="Eleva360"
                width={1809}
                height={576}
                loading="lazy"
              />
              <span>Propuesta de trabajo</span>
            </div>
            <p className="proposal-label">El punto de partida</p>
            <h3>
              Una decisión.
              <br />
              Un plan concreto.
            </h3>
            <p className="proposal-summary">Un plan para mejorar tu negocio y generar más oportunidades de venta.</p>
            <dl>
              <div>
                <dt>Prioridad</dt>
                <dd>Qué vamos a resolver primero</dd>
              </div>
              <div>
                <dt>Alcance</dt>
                <dd>Qué incluye la implementación</dd>
              </div>
              <div>
                <dt>Plazo</dt>
                <dd>Cuándo y qué necesitamos de ti</dd>
              </div>
              <div>
                <dt>Inversión</dt>
                <dd>El valor del trabajo acordado</dd>
              </div>
            </dl>
            <div className="proposal-bottom">
              <Check aria-hidden="true" />
              <span>Todo acordado antes de implementar.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="acompanamiento" className="business-follow-up" aria-labelledby="followup-title">
        <div className="business-container business-followup-layout">
          <div>
            <p className="business-kicker">Después de implementar</p>
            <h2 id="followup-title">
              Una base que puede
              <br />
              <em>evolucionar contigo.</em>
            </h2>
          </div>
          <div>
            <p>
              Si tu negocio necesita seguimiento periódico o nuevas mejoras, definimos juntos el
              siguiente paso y su alcance.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="business-contact business-section"
        aria-labelledby="contact-title"
      >
        <div className="business-container business-contact-layout">
          <div>
            <p className="business-kicker">Comencemos por tu negocio</p>
            <h2 id="contact-title">
              ¿Qué te gustaría
              <br />
              <em>mejorar?</em>
            </h2>
          </div>
          <div className="business-contact-action">
            <p>
              Cuéntanos qué quieres lograr y cómo funciona hoy tu negocio. Identifiquemos oportunidades
              para atraer más clientes, aumentar tus ventas y mejorar tu operación.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="business-whatsapp">
              <MessageCircle aria-hidden="true" />
              Solicitar diagnóstico inicial
            </a>
            <span className="business-contact-note">Diagnóstico inicial sin costo.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
