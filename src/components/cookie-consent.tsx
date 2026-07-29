"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, Cookie, ExternalLink } from "lucide-react";

const COOKIE_KEY = "balneario_esperanca_cookie_consent";

interface ConsentData {
  accepted: boolean;
  date: string;
  version: string;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) {
        // Show after a small delay for better UX
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage not available, show banner anyway
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    try {
      const consent: ConsentData = {
        accepted: true,
        date: new Date().toISOString(),
        version: "1.0",
      };
      localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
    } catch {
      // Silently fail if localStorage not available
    }
    setVisible(false);
  };

  const declineCookies = () => {
    try {
      localStorage.setItem(
        COOKIE_KEY,
        JSON.stringify({ accepted: false, date: new Date().toISOString(), version: "1.0" })
      );
    } catch {
      // Silently fail
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-24 left-4 right-4 sm:left-6 sm:right-6 md:left-auto md:right-6 md:bottom-24 md:max-w-md z-50"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-emerald-100 p-6 relative">
            {/* Close button */}
            <button
              onClick={declineCookies}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Fechar aviso de cookies"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-emerald-900 text-sm">
                Política de Cookies & LGPD
              </h3>
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Utilizamos cookies para melhorar sua experiência de navegação e
              garantir o funcionamento adequado deste site. Em conformidade com
              a{" "}
              <span className="font-semibold text-emerald-700">
                Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)
              </span>
              , informamos que{" "}
              <strong>não coletamos dados pessoais</strong> dos visitantes. Este
              site não utiliza ferramentas de rastreamento, analytics ou
              publicidade de terceiros.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={acceptCookies}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4" />
                Aceitar
              </button>
              <button
                onClick={declineCookies}
                className="text-gray-500 hover:text-gray-700 text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
              >
                Recusar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
