"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  TreePine,
  Droplets,
  Home,
  Flame,
  MapPin,
  Phone,
  Clock,
  Users,
  Star,
  ChevronDown,
  Sparkles,
  Heart,
  Sun,
  Instagram,
  Play,
  Navigation,
  Shield,
  ExternalLink,
  Eye,
} from "lucide-react";
import WhatsAppButton from "@/components/whatsapp-button";
import Lightbox from "@/components/lightbox";
import CookieConsent from "@/components/cookie-consent";

/* ─── Config ─── */
const WHATSAPP_NUMBER = "559491062785";
const PRESET_MSG = encodeURIComponent(
  "Olá! Vim pelo site do Balneário Esperança e gostaria de saber mais sobre a locação do espaço. Podem me ajudar?"
);
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PRESET_MSG}`;

const WHATSAPP_MSG_AGENDAR = encodeURIComponent(
  "Olá! Gostaria de agendar uma visita ao Balneário Esperança. Qual a disponibilidade?"
);
const WHATSAPP_MSG_EVENTO = encodeURIComponent(
  "Olá! Planejo realizar um evento no Balneário Esperança. Poderia me passar mais informações sobre valores e disponibilidade?"
);
const WHATSAPP_MSG_DÚVIDAS = encodeURIComponent(
  "Olá! Tenho algumas dúvidas sobre o Balneário Esperança. Poderia me ajudar?"
);

const INSTAGRAM_URL = "https://www.instagram.com/balneario_esperanca01/";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/Exmcn8feJiKHfqMV7";
const INSTA_VIDEO_URL = "https://www.instagram.com/p/DabGK6qPP7X/";

/* ─── Images ─── */
const GALLERY_IMAGES = [
  { src: "/images/ambiente.JPEG", alt: "Ambiente do Balneário Esperança" },
  { src: "/images/area de banho.JPEG", alt: "Área de banho do Balneário" },
  { src: "/images/quiosque.JPEG", alt: "Quiosque do Balneário Esperança" },
  { src: "/images/banheiro.JPEG", alt: "Banheiro do Balneário" },
  { src: "/images/natureza.JPEG", alt: "Natureza ao redor do Balneário" },
];

/* ─── Features ─── */
const FEATURES = [
  {
    icon: Droplets,
    title: "Área de Banho",
    description:
      "Piscina natural e área de banho com águas cristalinas, perfeita para relaxar e se refrescar nos dias quentes, cercada pela natureza exuberante.",
  },
  {
    icon: Home,
    title: "Quiosques",
    description:
      "Quiosques amplos e bem estruturados, ideais para reunir família e amigos em um ambiente agradável ao ar livre com sombra e conforto.",
  },
  {
    icon: Home,
    title: "Banheiros Limpos",
    description:
      "Banheiros completos e sempre limpos, com estrutura adequada para garantir conforto e bem-estar a todos os visitantes do balneário.",
  },
  {
    icon: TreePine,
    title: "Contato com a Natureza",
    description:
      "Ampla área verde com árvores nativas e paisagem preservada, proporcionando uma experiência única de tranquilidade em harmonia com o meio ambiente.",
  },
  {
    icon: Users,
    title: "Espaço para Eventos",
    description:
      "Área ampla para realização de festas, eventos corporativos, reuniões familiares e comemorações especiais, com capacidade para grandes grupos.",
  },
  {
    icon: Sun,
    title: "Lazer ao Ar Livre",
    description:
      "Espaços abertos para atividades diversas, jogos, descanso e contemplação da paisagem natural, ideais para todas as idades.",
  },
];

/* ─── Animation helpers ─── */
function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarSolid(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── NAVBAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navbarSolid
            ? "bg-emerald-900/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <Image
              src="/images/logotipo.jpg"
              alt="Logo Balneário Esperança"
              width={50}
              height={50}
              className="rounded-full border-2 border-white/30 group-hover:border-white/70 transition-colors"
            />
            <span className="font-bold text-lg text-white">
              Balneário Esperança
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Início
            </a>
            <a
              href="#galeria"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Galeria
            </a>
            <a
              href="#diferenciais"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Diferenciais
            </a>
            <a
              href="#como-chegar"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Como Chegar
            </a>
            <a
              href="#localizacao"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Localização
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-emerald-900 font-semibold px-5 py-2 rounded-full text-sm transition-all hover:scale-105 shadow-lg"
            >
              Reservar Agora
            </a>
          </div>
          {/* Mobile CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-amber-500 hover:bg-amber-600 text-emerald-900 font-semibold px-4 py-2 rounded-full text-sm transition-all shadow-lg"
          >
            Reservar
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/ambiente.JPEG"
            alt="Balneário Esperança"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-medium text-sm uppercase tracking-wider">
                O melhor espaço de lazer da região
              </span>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Balneário
              <span className="block text-emerald-300">Esperança</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
              Um refúgio de paz e natureza para seus momentos mais especiais.
              Espaço completo para locação de eventos, festas e dias de lazer
              com toda a família.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-emerald-900 font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Reservar pelo WhatsApp
              </a>
              <a
                href="#galeria"
                className="border-2 border-white/40 hover:border-white/80 text-white font-medium px-8 py-4 rounded-full text-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                Ver Galeria
                <ChevronDown className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            <div className="flex items-center gap-2 text-white/70">
              <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
              <span className="text-sm">5.0 Avaliação</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Users className="w-5 h-5" />
              <span className="text-sm">Capacidade para Grandes Grupos</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <TreePine className="w-5 h-5" />
              <span className="text-sm">Área Verde Preservada</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* ─── GALLERY ─── */}
      <section id="galeria" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Conheça nosso espaço
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mt-3 mb-6">
              Galeria de Fotos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore as belezas do Balneário Esperança. Nosso espaço foi pensado
              para proporcionar conforto, tranquilidade e momentos inesquecíveis
              em contato direto com a natureza.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((image, index) => (
              <FadeInSection
                key={image.src}
                delay={index * 0.1}
                className={
                  index === 0
                    ? "sm:col-span-2 lg:col-span-2 sm:row-span-2"
                    : ""
                }
              >
                <button
                  onClick={() => openLightbox(index)}
                  className={`img-zoom relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow w-full ${
                    index === 0 ? "h-64 sm:h-full" : "h-64"
                  }`}
                  aria-label={`Ver ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="font-semibold text-lg">{image.alt}</p>
                      <p className="text-white/70 text-sm mt-1">
                        Clique para ampliar
                      </p>
                    </div>
                  </div>
                </button>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES / DIFERENCIAIS ─── */}
      <section id="diferenciais" className="py-20 sm:py-28 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Por que nos escolher
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mt-3 mb-6">
              Nossos Diferenciais
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Cada detalhe do Balneário Esperança foi pensado para oferecer a
              melhor experiência de lazer e convivência com a natureza.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <FadeInSection key={feature.title} delay={index * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border border-emerald-100/50">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                    <feature.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/natureza.JPEG"
            alt="Natureza do Balneário Esperança"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-emerald-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeInSection>
            <Heart className="w-10 h-10 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para viver momentos incríveis?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Entre em contato agora pelo WhatsApp e garanta a reserva do
              Balneário Esperança para o seu próximo evento ou dia de lazer.
              Atendemos rapidamente!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG_AGENDAR}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-emerald-900 font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl flex items-center gap-2"
              >
                <Clock className="w-5 h-5" />
                Agendar Visita
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG_EVENTO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-amber-400 hover:border-amber-300 text-amber-300 hover:text-amber-200 font-medium px-8 py-4 rounded-full text-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Planejar Evento
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── COMO CHEGAR (VIDEO) ─── */}
      <section id="como-chegar" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Veja o trajeto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mt-3 mb-6">
              Como Chegar
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Confira o vídeo abaixo com instruções detalhadas de como chegar ao
              Balneário Esperança. Siga o trajeto e aproveite o melhor da
              natureza!
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  className="w-full aspect-video object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/natureza.JPEG"
                  onPlay={() => setVideoPlaying(true)}
                  onPause={() => setVideoPlaying(false)}
                >
                  <source src="/images/como-chegar.mp4" type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeo.
                </video>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
                >
                  <Navigation className="w-5 h-5" />
                  Abrir no Google Maps
                </a>
                <a
                  href={INSTA_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-pink-500 hover:bg-pink-50 text-pink-600 font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
                >
                  <Instagram className="w-5 h-5" />
                  Ver no Instagram
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── LOCATION ─── */}
      <section id="localizacao" className="py-20 sm:py-28 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Venha nos visitar
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mt-3 mb-6">
              Localização
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              O Balneário Esperança está localizado em um ponto de fácil acesso,
              rodeado pela natureza. Confira no mapa abaixo como chegar.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <FadeInSection>
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3947.2!2d-49.5510784!3d-3.5499953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!6m0!7i128!8i0"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Balneário Esperança"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 text-lg mb-1">
                      Endereço
                    </h3>
                    <p className="text-gray-600">
                      Clique no botão abaixo para abrir a localização completa no
                      Google Maps com instruções de como chegar.
                    </p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      Abrir no Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 text-lg mb-1">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-gray-600">
                      Nosso espaço está disponível para locação mediante
                      agendamento prévio. Entre em contato pelo WhatsApp para
                      verificar disponibilidade de datas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 text-lg mb-1">
                      Contato
                    </h3>
                    <p className="text-gray-600">
                      Toda comunicação e agendamento é realizada via WhatsApp para
                      maior agilidade e praticidade no atendimento.
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG_DÚVIDAS}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Falar pelo WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logotipo.jpg"
                  alt="Logo Balneário Esperança"
                  width={45}
                  height={45}
                  className="rounded-full border-2 border-white/30"
                />
                <span className="font-bold text-xl">Balneário Esperança</span>
              </div>
              <p className="text-white/60 leading-relaxed mb-4">
                Seu espaço de lazer favorito para eventos, festas e momentos
                especiais em contato com a natureza.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @balneario_esperanca01
              </a>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#galeria"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Galeria
                  </a>
                </li>
                <li>
                  <a
                    href="#diferenciais"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a
                    href="#como-chegar"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Como Chegar
                  </a>
                </li>
                <li>
                  <a
                    href="#localizacao"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Localização
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Reservas</h4>
              <p className="text-white/60 mb-4 leading-relaxed">
                Agende sua visita ou reserva pelo WhatsApp. Atendimento rápido e
                personalizado.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-emerald-900 font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* LGPD + Developer credit */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col items-center gap-4 text-center">
              {/* LGPD compliance links */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
                <div className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Este site está em conformidade com a LGPD (Lei 13.709/2018)</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
                <a
                  href="#lgpd-privacidade"
                  className="hover:text-white/60 underline underline-offset-2 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("lgpd-privacidade");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                      el.click();
                    }
                  }}
                >
                  Política de Privacidade
                </a>
                <a
                  href="#lgpd-termos"
                  className="hover:text-white/60 underline underline-offset-2 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("lgpd-termos");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                      el.click();
                    }
                  }}
                >
                  Termos de Uso
                </a>
                <a
                  href="#lgpd-cookies"
                  className="hover:text-white/60 underline underline-offset-2 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("lgpd-cookies");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                      el.click();
                    }
                  }}
                >
                  Política de Cookies
                </a>
              </div>
              {/* Copyright + Developer */}
              <div className="flex flex-col items-center gap-1">
                <p className="text-white/40 text-xs">
                  © {new Date().getFullYear()} Balneário Esperança. Todos os
                  direitos reservados.
                </p>
                <p className="text-white/30 text-xs">
                  Desenvolvido por{" "}
                  <a
                    href="https://wa.me/5594981028614?text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de site."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400/70 hover:text-amber-400 font-medium transition-colors"
                  >
                    João Carlos
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP BUTTON ─── */}
      <WhatsAppButton />

      {/* ─── LIGHTBOX ─── */}
      <Lightbox
        images={GALLERY_IMAGES}
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />

      {/* ─── LGPD COOKIE CONSENT ─── */}
      <CookieConsent />
    </div>
  );
}
