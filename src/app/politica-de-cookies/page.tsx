import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Cookies | Balneário Esperança",
  description:
    "Política de Cookies do site Balneário Esperança. Saiba quais cookies utilizamos, para que servem e como gerenciá-los, em conformidade com a LGPD.",
};

export default function PoliticaDeCookies() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-emerald-900 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-8 h-8 text-emerald-300" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Política de Cookies
            </h1>
          </div>
          <p className="text-white/60 text-sm">
            Última atualização: Julho de 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          {/* 1. O que são Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              1. O que são Cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu
              dispositivo (computador, smartphone ou tablet) quando você visita um
              site. Eles são amplamente utilizados na web para fazer os sites
              funcionarem de maneira mais eficiente, fornecer informações aos
              proprietários do site e personalizar a experiência do usuário.
            </p>
            <p>
              Os cookies podem ser armazenados pelo próprio site que você está
              visitando (cookies próprios) ou por terceiros (cookies de
              terceiros). Eles podem ser temporários (cookies de sessão, que são
              excluídos quando você fecha o navegador) ou persistentes (que
              permanecem armazenados por um período determinado).
            </p>
            <p>
              O site do Balneário Esperança utiliza cookies de forma mínima e
              transparente, conforme detalhado nesta política. Em conformidade com
              a LGPD (Lei nº 13.709/2018) e as diretrizes da ANPD (Autoridade
              Nacional de Proteção de Dados), informamos claramente quais
              cookies utilizamos e suas respectivas finalidades.
            </p>
          </section>

          {/* 2. Cookies Utilizados */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              2. Cookies que Utilizamos
            </h2>
            <p>
              O site do Balneário Esperança utiliza exclusivamente{" "}
              <strong>cookies técnicos essenciais</strong> para o funcionamento
              básico do site. Não utilizamos cookies de rastreamento, cookies
              publicitários, cookies de análise, cookies de marketing ou cookies
              de redes sociais.
            </p>

            <h3 className="text-xl font-bold text-emerald-900 mt-8 mb-4">
              2.1. Cookie de Consentimento (localStorage)
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">
                      Nome
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">
                      Finalidade
                    </th>
                    <th className="text-left py-2 font-semibold text-gray-900">
                      Duração
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">
                      <code className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-xs">
                        balneario_esperanca_cookie_consent
                      </code>
                    </td>
                    <td className="py-3 pr-4">
                      Armazena a sua preferência de consentimento de cookies
                      (aceitar ou recusar). Isso garante que o banner de cookies
                      não seja exibido repetidamente a cada nova visita.
                    </td>
                    <td className="py-3">Persistente (até limpeza manual)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Este cookie é armazenado exclusivamente no{" "}
              <strong>localStorage</strong> do seu navegador e{" "}
              <strong>não é enviado a nenhum servidor</strong>. Ele não contém
              dados pessoais identificáveis e serve apenas para memorizar a sua
              escolha quanto à aceitação ou recusa de cookies no site.
            </p>

            <h3 className="text-xl font-bold text-emerald-900 mt-8 mb-4">
              2.2. Cookies de Serviços de Terceiros
            </h3>
            <p>
              Alguns serviços integrados ao site podem implantar seus próprios
              cookies quando você interage com eles. Estes cookies são de
              responsabilidade exclusiva dos respectivos terceiros:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">
                      Serviço
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">
                      Finalidade
                    </th>
                    <th className="text-left py-2 font-semibold text-gray-900">
                      Política
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Google Maps</td>
                    <td className="py-3 pr-4">
                      Exibição do mapa de localização do estabelecimento.
                    </td>
                    <td className="py-3">
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 underline"
                      >
                        Ver política
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">
                      WhatsApp (Meta)
                    </td>
                    <td className="py-3 pr-4">
                      Redirecionamento para contato via WhatsApp.
                    </td>
                    <td className="py-3">
                      <a
                        href="https://www.whatsapp.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 underline"
                      >
                        Ver política
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Tipos de Cookies NÃO Utilizados */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              3. Cookies que NÃO Utilizamos
            </h2>
            <p>
              Em atendimento aos princípios de minimização e finalidade previstos
              na LGPD, o site do Balneário Esperança{" "}
              <strong>não utiliza</strong> os seguintes tipos de cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Cookies de rastreamento:</strong> não rastreamos a sua
                navegação pelo site ou por outros sites;
              </li>
              <li>
                <strong>Cookies publicitários:</strong> não exibimos anúncios
                personalizados baseados no seu perfil de navegação;
              </li>
              <li>
                <strong>Cookies de análise (Analytics):</strong> não utilizamos
                Google Analytics, Facebook Pixel ou qualquer ferramenta similar
                para análise de tráfego;
              </li>
              <li>
                <strong>Cookies de marketing:</strong> não realizamos
                remarketing ou segmentação de público;
              </li>
              <li>
                <strong>Cookies de redes sociais:</strong> não integramos botões
                de compartilhamento que rastreiam o comportamento do visitante.
              </li>
            </ul>
          </section>

          {/* 4. Gerenciamento de Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              4. Como Gerenciar Cookies
            </h2>
            <p>
              Quando você acessa o site do Balneário Esperança pela primeira
              vez, é exibido um banner de consentimento de cookies, onde você
              pode escolher entre aceitar ou recusar os cookies utilizados.
            </p>
            <p>
              Além disso, você pode gerenciar e excluir cookies diretamente nas
              configurações do seu navegador. Abaixo estão as instruções para os
              navegadores mais utilizados:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Google Chrome:</strong> Configurações → Privacidade e
                segurança → Cookies e outros dados do site;
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Opções → Privacidade e
                segurança → Cookies e dados do site;
              </li>
              <li>
                <strong>Safari:</strong> Preferências → Privacidade → Gerenciar
                dados de sites;
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Configurações → Cookies e
                permissões do site → Gerenciar e excluir cookies.
              </li>
            </ul>
            <p className="mt-4">
              Atenção: a desativação de cookies pode afetar o funcionamento de
              alguns recursos do site. No entanto, como utilizamos apenas cookies
              técnicos essenciais, o site continuará acessível mesmo com cookies
              desabilitados (apenas o banner de consentimento poderá aparecer
              novamente em cada visita).
            </p>
          </section>

          {/* 5. Base Legal */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              5. Base Legal para Utilização de Cookies
            </h2>
            <p>
              A utilização de cookies neste site tem como base legal o{" "}
              <strong>legítimo interesse</strong> do controlador (art. 7º, IX,
              da LGPD), uma vez que os cookies utilizados são estritamente
              necessários para o funcionamento técnico do site (memorização da
              preferência de consentimento).
            </p>
            <p>
              O consentimento do visitante é obtido por meio do banner de cookies
              exibido na primeira visita, em conformidade com as diretrizes da
              ANPD e as melhores práticas de transparência.
            </p>
          </section>

          {/* 6. Alterações */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              6. Alterações nesta Política de Cookies
            </h2>
            <p>
              O Balneário Esperança reserva-se o direito de atualizar esta
              Política de Cookies a qualquer momento, especialmente em caso de
              mudanças na tecnologia, nos serviços utilizados ou por exigências
              legais. As alterações entrarão em vigor imediatamente após a
              publicação nesta página, com a data de atualização revisada.
            </p>
            <p>
              Recomendamos que você revise esta política periodicamente para se
              manter informado sobre as práticas de cookies utilizadas no site.
            </p>
          </section>

          {/* 7. Contato */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              7. Contato
            </h2>
            <p>
              Para dúvidas, solicitações ou esclarecimentos sobre esta Política
              de Cookies ou sobre o uso de cookies no site, entre em contato
              conosco pelo WhatsApp:
            </p>
            <a
              href="https://wa.me/559491062785?text=Olá! Tenho uma dúvida sobre a Política de Cookies do site do Balneário Esperança."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Falar pelo WhatsApp
            </a>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/40 mb-4">
            <Link
              href="/politica-de-privacidade"
              className="hover:text-white/60 underline underline-offset-2 transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="hover:text-white/60 underline underline-offset-2 transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/politica-de-cookies"
              className="hover:text-white/60 underline underline-offset-2 transition-colors"
            >
              Política de Cookies
            </Link>
          </div>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Balneário Esperança. Todos os direitos
            reservados.
          </p>
          <p className="text-white/30 text-xs mt-1">
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
      </footer>
    </main>
  );
}
