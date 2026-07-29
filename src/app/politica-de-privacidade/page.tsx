import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Balneário Esperança",
  description:
    "Política de Privacidade do site Balneário Esperança. Saiba como protegemos seus dados pessoais em conformidade com a LGPD (Lei 13.709/2018).",
};

export default function PoliticaPrivacidade() {
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
            <Shield className="w-8 h-8 text-emerald-300" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Política de Privacidade
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
          {/* 1. Introdução */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              1. Introdução
            </h2>
            <p>
              A presente Política de Privacidade tem como objetivo informar os
              visitantes e usuários do site <strong>Balneário Esperança</strong>{" "}
              (disponível em domínio próprio) sobre como tratamos e protegemos
              seus dados pessoais, em total conformidade com a Lei Geral de
              Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018) e demais
              normas aplicáveis.
            </p>
            <p>
              Ao navegar neste site, você declara estar ciente e de acordo com
              os termos aqui descritos. Caso não concorde com alguma disposição,
              recomendamos que não utilize o site.
            </p>
            <p>
              O <strong>Controlador</strong> dos dados pessoais tratados neste
              site é o proprietário do Balneário Esperança, estabelecido na zona
              rural de Breu Branco, Estado do Pará.
            </p>
          </section>

          {/* 2. Dados Coletados */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              2. Dados Pessoais Coletados
            </h2>
            <p>
              Este site foi desenvolvido com a finalidade de apresentação do
              espaço de lazer Balneário Esperança e captação de leads para
              agendamentos. Informamos que{" "}
              <strong>
                este site não armazena, registra ou coleta nenhum dado pessoal
                dos visitantes
              </strong>
              , como nome, e-mail, telefone, endereço IP ou qualquer outra
              informação identificável.
            </p>
            <p>
              Todo o processo de agendamento, reserva, negociação e atendimento é
              realizado exclusivamente por meio do aplicativo WhatsApp, que
              possui sua própria política de privacidade. Portanto, ao clicar nos
              botões de contato do site, você será redirecionado para o
              WhatsApp, onde seus dados estarão sujeitos à política de
              privacidade do Meta/WhatsApp.
            </p>
            <p>
              Os únicos dados técnicos automaticamente processados durante a
              navegação são:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Cookies técnicos essenciais:</strong> utilizados para
                armazenar sua preferência de consentimento de cookies (aceitar ou
                recusar), garantindo que o banner de cookies não seja exibido
                repetidamente. Este cookie é armazenado exclusivamente no seu
                navegador (localStorage) e não é enviado a nenhum servidor.
              </li>
              <li>
                <strong>Dados de navegação:</strong> informações como tipo de
                navegador, sistema operacional e resolução de tela podem ser
                coletadas temporariamente pelo provedor de hospedagem para
                fins de manutenção técnica e segurança do servidor.
              </li>
            </ul>
          </section>

          {/* 3. Finalidade do Tratamento */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              3. Finalidade do Tratamento de Dados
            </h2>
            <p>
              Conforme mencionado, este site não realiza tratamento de dados
              pessoais dos visitantes. Os dados de navegação eventualmente
              coletados pelo provedor de hospedagem têm como única finalidade a
              manutenção da infraestrutura técnica e a segurança do servidor.
            </p>
            <p>
              O cookie de consentimento de cookies é utilizado apenas para
              respeitar a sua escolha quanto à aceitação ou recusa de cookies no
              site, não sendo utilizado para nenhuma outra finalidade.
            </p>
          </section>

          {/* 4. Compartilhamento de Dados */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              4. Compartilhamento de Dados com Terceiros
            </h2>
            <p>
              O Balneário Esperança{" "}
              <strong>
                não compartilha, vende, aluga ou distribui dados pessoais de
                visitantes a terceiros
              </strong>
              , pois não realiza a coleta de tais dados.
            </p>
            <p>
              Quando você clica nos botões de contato do site e é redirecionado
              para o WhatsApp, qualquer dado que você compartilhe na conversa no
              WhatsApp é de responsabilidade exclusiva do Meta/WhatsApp, conforme
              seus próprios termos de uso e política de privacidade.
            </p>
            <p>
              O site utiliza serviços de terceiros estritamente necessários para o
              seu funcionamento, como:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Google Maps:</strong> para exibição da localização do
                estabelecimento. Sujeito à{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Política de Privacidade do Google
                </a>
                .
              </li>
              <li>
                <strong>WhatsApp (Meta):</strong> para redirecionamento de links de
                contato. Sujeito à{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Política de Privacidade do WhatsApp
                </a>
                .
              </li>
            </ul>
          </section>

          {/* 5. Segurança dos Dados */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              5. Segurança dos Dados
            </h2>
            <p>
              Embora este site não colete dados pessoais, adotamos medidas
              técnicas e administrativas adequadas para proteger a integridade e
              a disponibilidade do site. O site utiliza certificado SSL/TLS para
              garantir a comunicação segura (HTTPS) entre o navegador do
              visitante e o servidor.
            </p>
            <p>
              Recomendamos que, ao utilizar o WhatsApp para contato, o visitante
              verifique as políticas de privacidade e segurança do WhatsApp/Meta,
              já que toda a comunicação de dados pessoais ocorre dentro do
              aplicativo WhatsApp.
            </p>
          </section>

          {/* 6. Direitos do Titular */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              6. Direitos do Titular dos Dados
            </h2>
            <p>
              Conforme a LGPD (Lei nº 13.709/2018), todo titular de dados
              pessoais possui direitos que podem ser exercidos a qualquer
              momento. No entanto, considerando que este site não coleta dados
              pessoais, não há dados pessoais a serem tratados ou excluídos por
              nós.
            </p>
            <p>
              Caso você tenha compartilhado dados pessoais diretamente pelo
              WhatsApp em conversas com o Balneário Esperança, esses dados estão
              sob a guarda do aplicativo WhatsApp/Meta. Para exercer seus
              direitos sobre essas informações, recomendamos entrar em contato
              diretamente pelo WhatsApp ou consultar a política de privacidade do
              Meta/WhatsApp.
            </p>
            <p>Dentre os direitos previstos na LGPD, destacam-se:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso aos dados pessoais;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>
                Anonimização, bloqueio ou eliminação de dados desnecessários;
              </li>
              <li>Portabilidade dos dados;</li>
              <li>Eliminação dos dados pessoais tratados com consentimento;</li>
              <li>Revogação do consentimento;</li>
              <li>
                Oposição ao tratamento de dados em caso de irregularidade.
              </li>
            </ul>
          </section>

          {/* 7. Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              7. Uso de Cookies
            </h2>
            <p>
              Este site utiliza exclusivamente cookies técnicos essenciais para o
              seu funcionamento básico. Não utilizamos cookies de rastreamento,
              cookies publicitários, cookies de análise ou cookies de terceiros
              para fins de marketing.
            </p>
            <p>
              O único cookie utilizado armazena a sua preferência de consentimento
              de cookies (aceitar ou recusar) no armazenamento local do seu
              navegador (localStorage). Este dado não é transmitido a nenhum
              servidor e pode ser excluído a qualquer momento limpando os dados de
              navegação do seu navegador.
            </p>
            <p>
              Para mais detalhes sobre cookies, consulte nossa{" "}
              <Link
                href="/politica-de-cookies"
                className="text-emerald-600 hover:text-emerald-700 underline font-medium"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </section>

          {/* 8. Retenção de Dados */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              8. Retenção de Dados
            </h2>
            <p>
              Como este site não coleta dados pessoais, não há período de
              retenção de dados pessoais aplicável. O cookie de consentimento é
              armazenado apenas no navegador do visitante e permanece até que o
              visitante limpe os dados de navegação ou revogue manualmente o
              consentimento.
            </p>
          </section>

          {/* 9. Alterações */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              9. Alterações nesta Política
            </h2>
            <p>
              O Balneário Esperança reserva-se o direito de atualizar esta
              Política de Privacidade a qualquer momento para refletir mudanças
              nas nossas práticas ou por exigências legais. Quaisquer alterações
              serão publicadas nesta página com a data de atualização revisada.
              Recomendamos que você revise esta política periodicamente.
            </p>
          </section>

          {/* 10. Contato */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              10. Contato
            </h2>
            <p>
              Para dúvidas, solicitações ou esclarecimentos sobre esta Política
              de Privacidade ou sobre o tratamento de dados pessoais, entre em
              contato conosco pelo WhatsApp:
            </p>
            <a
              href="https://wa.me/559491062785?text=Olá! Tenho uma dúvida sobre a Política de Privacidade do site do Balneário Esperança."
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
