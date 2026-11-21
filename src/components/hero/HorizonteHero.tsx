import { useEffect, useRef } from "react";
import desktopBackground from "../../assets/horizonte-escritorio.webp";
import mobileBackground from "../../assets/horizonte-movil.webp";
import { mountHorizonte } from "./horizonte-motion";
import "./horizonte.css";

export function HorizonteHero({ whatsappUrl }: { whatsappUrl: string }) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) return mountHorizonte(heroRef.current);
  }, []);

  return (
    <section className="horizonte" ref={heroRef} aria-labelledby="horizonte-title">
      <div className="canvas">
        <div className="bg" aria-hidden="true">
          <picture>
            <source media="(width < 900px)" srcSet={mobileBackground} width={1080} height={1920} />
            <img src={desktopBackground} alt="" width={2560} height={1440} fetchPriority="high" />
          </picture>
          <div className="veil"></div>
          <div className="grain"></div>
        </div>

        <div className="copy">
          <p className="eyebrow">Soluciones digitales para negocios</p>
          <h1 id="horizonte-title">
            Antes de proponer soluciones, <em>entendemos</em> tu negocio.
          </h1>
          <p className="lead">
            Analizamos cómo funciona tu negocio para detectar qué necesita mejorar. Luego
            priorizamos e implementamos soluciones digitales simples, por etapas y adaptadas a tu
            realidad.
          </p>
          <div className="ctas">
            <a className="btn btn-wa" href={whatsappUrl} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.3 4.8 4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.9a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"
                />
              </svg>
              Solicitar diagnóstico inicial
            </a>
            <a className="btn btn-sec" href="#como-funciona">
              Conocer cómo trabajamos{" "}
              <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="stage st">
          <p className="sr-only">
            Cómo trabajamos: primero entendemos tu negocio; luego diagnosticamos su visibilidad,
            contacto y confianza; priorizamos lo que conviene resolver primero (en este ejemplo, el
            contacto con tus clientes); implementamos una solución simple de atención y te
            acompañamos revisando, aprendiendo y ajustando.
          </p>
          <div
            className="stage-scroll"
            role="region"
            aria-label="Tarjetas de la metodología"
            tabIndex={0}
          >
            <div className="stage-in">
              <div className="card c4" aria-hidden="true">
                <div className="badge">
                  <svg className="i" viewBox="0 0 24 24">
                    <path d="M20 11a8 8 0 0 0-14.6-4.4L4 8" />
                    <path d="M4 4v4h4" />
                    <path d="M4 13a8 8 0 0 0 14.6 4.4L20 16" />
                    <path d="M20 20v-4h-4" />
                  </svg>
                </div>
                <h3>Acompañar</h3>
                <div className="c4-body">
                  <span className="ph"></span>
                  <ol className="cycle">
                    <li>Revisar</li>
                    <li>Aprender</li>
                    <li>Ajustar</li>
                  </ol>
                </div>
              </div>
              <div className="card c3" aria-hidden="true">
                <div className="badge">
                  <svg className="i i-pre" viewBox="0 0 24 24">
                    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
                  </svg>
                  <svg className="i-chat" viewBox="0 0 24 24">
                    <path
                      d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-5 4v-4H6a2 2 0 0 1-2-2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Implementar</h3>
                <div className="c3-body">
                  <span className="ph"></span>
                  <div className="chat">
                    <span className="msg in">Hola, ¿atienden hoy?</span>
                    <span className="reply">
                      <span className="typing">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                      <span className="msg out">¡Sí! ¿Te envío el horario?</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card c2" aria-hidden="true">
                <div className="badge">
                  <svg className="i" viewBox="0 0 24 24">
                    <path d="M9 6h11M9 12h11M9 18h11" />
                    <circle cx="4.5" cy="6" r="1" />
                    <circle cx="4.5" cy="12" r="1" />
                    <circle cx="4.5" cy="18" r="1" />
                  </svg>
                </div>
                <h3>Priorizar</h3>
                <ol className="lns">
                  <li className="l1">
                    <span>Contacto</span>
                    <i>Primero</i>
                  </li>
                  <li className="l2">
                    <span>Visibilidad</span>
                    <i>Después</i>
                  </li>
                  <li className="l3">
                    <span>Confianza</span>
                    <i>Después</i>
                  </li>
                </ol>
              </div>
              <div className="card c1" aria-hidden="true">
                <div className="c1-head">
                  <div className="tile">
                    <svg className="i" viewBox="0 0 24 24">
                      <circle cx="10.5" cy="10.5" r="6.5" />
                      <path d="M15.5 15.5 20 20" />
                    </svg>
                  </div>
                  <p className="kicker">
                    <span className="k1">01 Entender</span>
                    <span className="k2">02 Diagnosticar</span>
                  </p>
                </div>
                <h2>Diagnóstico</h2>
                <div className="c1-body">
                  <div className="biz">
                    <div className="biz-top">
                      <span className="biz-art">
                        <svg viewBox="0 0 64 64">
                          <path
                            d="M14 12h36l4 10q-5.5 7-11 0-5.5 7-11 0-5.5 7-11 0-5.5 7-11 0z"
                            fill="#D86D48"
                          />
                          <path
                            d="M21 22q5.5 7 11 0 5.5 7 11 0"
                            fill="none"
                            stroke="#F7F1E6"
                            strokeWidth="1.4"
                            opacity=".7"
                          />
                          <g
                            fill="none"
                            stroke="#1B1A18"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          >
                            <path d="M15 27v24h34V27" />
                            <rect x="20" y="33" width="11" height="9" rx="1" />
                            <path d="M36 51V35h9v16" />
                            <path d="M9 51h46" />
                          </g>
                          <circle cx="42.5" cy="44" r="1" fill="#1B1A18" />
                        </svg>
                      </span>
                      <span>
                        <b>Tu negocio</b>
                        <small>Así funciona hoy</small>
                      </span>
                    </div>
                    <p>¿Cómo te encuentran, cómo te contactan y por qué te eligen?</p>
                  </div>
                  <ul className="rows">
                    <li className="row row-vis">
                      <span className="ico">
                        <svg className="i" viewBox="0 0 24 24">
                          <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </span>
                      Visibilidad
                    </li>
                    <li className="row row-con on">
                      <span className="ico">
                        <svg viewBox="0 0 24 24">
                          <path
                            d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-5 4v-4H6a2 2 0 0 1-2-2z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Contacto<span className="tag">Oportunidad</span>
                    </li>
                    <li className="row row-conf">
                      <span className="ico">
                        <svg className="i" viewBox="0 0 24 24">
                          <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                      </span>
                      Confianza
                    </li>
                  </ul>
                  <span className="brk"></span>
                </div>
              </div>
              <div className="glint" aria-hidden="true"></div>

              <div className="flyer" aria-hidden="true">
                <span className="ico">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-5 4v-4H6a2 2 0 0 1-2-2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Contacto
              </div>
            </div>
          </div>
          <button className="replay" type="button" hidden>
            <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12a8 8 0 1 0 2.4-5.7" />
              <path d="M4 4v4.5h4.5" />
            </svg>
            Ver el método otra vez
          </button>
        </div>
        <div className="sunlight" aria-hidden="true"></div>
        <div className="grain top" aria-hidden="true"></div>
      </div>
    </section>
  );
}
