import { Check, Globe, MapPin, MessageCircle, Search, ArrowRight, Workflow } from "lucide-react";
import businessPhoto from "../assets/menu-plato-premium.webp";
import cafePhoto from "../assets/hero-building.webp";
import brandLogo from "../assets/LogoEleva360-transparente.webp";
import "./business-sections.css";

const capabilities = [
  {
    title: "Presencia digital",
    description: "Que te encuentren y entiendan por qué elegir tu negocio.",
    tools: "Google · Identidad · Contenido",
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
    description: "Menos pasos repetitivos y más orden en tu operación.",
    tools: "Flujos · Integraciones · Seguimiento",
    icon: Workflow,
    visual: "process",
  },
] as const;

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
        </span>
        <span>Ilustrativo</span>
      </div>
      {kind === "presence" && (
        <>
          <div className="sketch-search">
            <Search /> Cafetería en tu zona
          </div>
          <div className="sketch-result">
            <div className="sketch-place-icon">
              <img src={cafePhoto} alt="" width={56} height={56} loading="lazy" />
            </div>
            <div>
              <b>Café del barrio</b>
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
            <div className="sketch-image">
              <img src={businessPhoto} alt="" loading="lazy" width={192} height={192} />
            </div>
            <div>
              <b>Sabores de casa</b>
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
          <div className="sketch-chat-header">
            <img
              className="sketch-avatar"
              src={cafePhoto}
              alt=""
              width={36}
              height={36}
              loading="lazy"
            />
            <b>Reservas</b>
            <span>Café del barrio</span>
          </div>
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
          <div className="sketch-record">
            <img src={cafePhoto} alt="" width={40} height={40} loading="lazy" />
            <span>
              <b>Café del barrio</b>
              <small>Gestión de consultas</small>
            </span>
          </div>
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
              Mejoramos cómo te encuentran, cómo presentas lo que ofreces y cómo atiendes. También
              creamos herramientas para simplificar tu operación.
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
            <p className="proposal-summary">Lo necesario para comenzar con claridad.</p>
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
              Cuéntanos qué quieres lograr y cómo funciona hoy tu negocio. Te ayudamos a identificar
              por dónde comenzar.
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
