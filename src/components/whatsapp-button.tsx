"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "559491062785";
const PRESET_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site do Balneário Esperança e gostaria de saber mais sobre a locação do espaço. Podem me ajudar?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PRESET_MESSAGE}`;

export default function WhatsAppButton() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    if (!tooltipDismissed) {
      const timer = setTimeout(() => {
        setTooltipVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [tooltipDismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-xl border border-emerald-100 p-4 max-w-[280px] mr-2"
          >
            <button
              onClick={() => {
                setTooltipVisible(false);
                setTooltipDismissed(true);
              }}
              className="absolute -top-1 -right-1 bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-emerald-700 transition-colors"
              aria-label="Fechar tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm font-semibold text-emerald-800 mb-1">
              Fale conosco! 💬
            </p>
            <p className="text-xs text-gray-600">
              Tire suas dúvidas e faça sua reserva diretamente pelo WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        onMouseEnter={() => {
          setTooltipVisible(false);
          setTooltipDismissed(true);
        }}
        onClick={() => {
          setTooltipVisible(false);
          setTooltipDismissed(true);
        }}
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" fill="white" />
      </motion.a>
    </div>
  );
}
