import { Check, Globe, MapPin, MessageCircle, ArrowRight, Workflow, Instagram } from "lucide-react";
import businessPhoto from "../assets/menu-plato-premium.webp";
import cafePhoto from "../assets/hero-building.webp";
import brandLogo from "../assets/LogoEleva360-transparente.webp";
import "./business-sections.css";
import "./capability-microinterfaces.css";

const capabilities = [
  {
    title: "Presencia digital",
    description: "Fortalecemos tu presencia en Google y redes sociales para que más personas encuentren tu negocio y confíen en lo que ofreces.",
    tools: "Google · Redes sociales · Identidad visual",
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
    tools: "Automatizaciones · Software a medida · Seguimiento",
    icon: Workflow,
    visual: "process",
  },
] as const;

function CapabilitySketch({ kind }: { kind: (typeof capabilities)[number]["visual"] }) {
  return (
    <div className={`business-sketch sketch-${kind}`} aria-hidden="true">
      {kind === "presence" ? (
        <div className="presence-visual">
          <div className="presence-visual-heading">
            <span>Google y redes sociales</span>
            <span>Café Pacífico</span>
          </div>
          <div className="presence-channel-card presence-google">
            <div className="presence-channel-head">
              <MapPin aria-hidden="true" />
              <strong>Google</strong>
              <span>Perfil de negocio</span>
            </div>
            <div className="presence-google-row">
              <img src={cafePhoto} alt="" width={38} height={38} loading="lazy" />
              <div>
                <b>Café Pacífico</b>
                <small>Ubicación y horarios</small>
              </div>
              <ArrowRight aria-hidden="true" className="presence-arrow" />
            </div>
          </div>
          <div className="presence-channel-card presence-instagram">
            <div className="presence-channel-head">
              <Instagram aria-hidden="true" />
              <strong>Instagram</strong>
              <span>Perfil y contenido</span>
            </div>
            <div className="presence-posts">
              <img src={cafePhoto} alt="" loading="lazy" />
              <img src={businessPhoto} alt="" loading="lazy" />
              <div className="presence-brand-tile" aria-hidden="true">CP</div>
            </div>
          </div>
        </div>
      ) : kind === "web" ? (
        <div className="web-visual">
          <div className="web-visual-heading">
            <span>Sitio web · Carta digital</span>
            <span>Café Pacífico</span>
          </div>
          <div className="web-browser-frame">
            <div className="web-browser-chrome">
              <div className="web-browser-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <small>Carta digital</small>
            </div>
            <div className="web-page-content">
              <div className="web-page-heading">
                <strong>Café Pacífico</strong>
                <span>Menú del día</span>
              </div>
              <div className="web-featured-dish">
                <img src={businessPhoto} alt="" width={72} height={76} loading="lazy" />
                <div className="web-product-details">
                  <strong>Pastas del día</strong>
                  <small>Preparadas al momento</small>
                  <span className="web-cta-chip">
                    Ver la carta <ArrowRight aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : kind === "contact" ? (
        <div className="contact-visual">
          <div className="contact-visual-heading">
            <span>WhatsApp · Reservas</span>
            <span>Café Pacífico</span>
          </div>
          <div className="contact-chat-frame">
            <div className="contact-chat-header">
              <span className="contact-chat-avatar"><MessageCircle aria-hidden="true" /></span>
              <div>
                <strong>Café Pacífico</strong>
                <small>Atención a clientes</small>
              </div>
              <span className="contact-chat-status" aria-hidden="true" />
            </div>
            <div className="contact-chat-messages">
              <div className="contact-bubble contact-customer">Hola, ¿tienen mesa para dos?</div>
              <div className="contact-bubble contact-response">Sí, ¿qué horario prefieres?</div>
              <div className="contact-time-row">
                <span>12:30</span>
                <span className="contact-time-selected"><Check aria-hidden="true" /> 16:00</span>
              </div>
              <div className="contact-confirmation"><Check aria-hidden="true" /> Horario seleccionado</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="process-visual">
          <div className="process-visual-heading">
            <span>Panel de gestión</span>
            <span>Café Pacífico</span>
          </div>
          <div className="process-dashboard">
            <div className="process-dashboard-head">
              <Workflow aria-hidden="true" />
              <strong>Consultas y reservas</strong>
              <span className="process-status-dot" aria-hidden="true" />
            </div>
            <div className="process-incoming">
              <div>
                <strong>Nueva consulta</strong>
                <small>Reserva · Mesa para dos</small>
              </div>
              <span>Nueva</span>
            </div>
            <div className="process-connector">
              <span aria-hidden="true">↓</span>
              <small>Registro automático</small>
            </div>
            <div className="process-outcome">
              <span className="process-check"><Check aria-hidden="true" /></span>
              <div>
                <strong>Consulta organizada</strong>
                <small>Lista para seguimiento</small>
              </div>
              <span className="process-followup-pill">Pendiente</span>
            </div>
          </div>
        </div>
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

