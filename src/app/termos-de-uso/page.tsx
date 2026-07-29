import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | Balneário Esperança",
  description:
    "Termos de Uso do site Balneário Esperança. Conheça as condições de utilização do nosso site e dos nossos serviços de locação de espaço de lazer.",
};

export default function TermosDeUso() {
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
            <FileText className="w-8 h-8 text-emerald-300" />
            <h1 className="text-3xl sm:text-4xl font-bold">Termos de Uso</h1>
          </div>
          <p className="text-white/60 text-sm">
            Última atualização: Julho de 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          {/* 1. Aceitação dos Termos */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar o site do <strong>Balneário Esperança</strong>,
              você concorda em cumprir integralmente estes Termos de Uso. Caso não
              concorde com qualquer disposição aqui apresentada, solicitamos que
              não utilize o site. Estes termos se aplicam a todos os visitantes,
              usuários e demais pessoas que acessam ou utilizam o site.
            </p>
            <p>
              O Balneário Esperança se reserva o direito de modificar estes
              Termos de Uso a qualquer momento, sem aviso prévio. As alterações
              entram em vigor imediatamente após a publicação no site.
              Recomendamos que você consulte esta página periodicamente para se
              manter informado sobre eventuais atualizações.
            </p>
          </section>

          {/* 2. Descrição do Site */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              2. Descrição do Site e Serviços
            </h2>
            <p>
              O site do Balneário Esperança é uma plataforma de apresentação e
              divulgação do espaço de lazer situado na zona rural de Breu Branco,
              Estado do Pará. O site tem como finalidade principal apresentar o
              espaço, seus diferenciais, galeria de fotos e informações de
              contato para captação de leads e agendamentos.
            </p>
            <p>
              O site funciona como vitrine virtual do Balneário Esperança,
              oferecendo informações sobre os serviços de locação do espaço para
              eventos, festas, reuniões e dias de lazer, incluindo área de banho,
              quiosques, banheiros, contato com a natureza e espaço para
              eventos ao ar livre.
            </p>
            <p>
              Importante ressaltar que{" "}
              <strong>
                este site não realiza agendamentos, reservas ou processamentos
                de pagamento
              </strong>
              . Toda a negociação, agendamento e reserva é realizada
              exclusivamente por meio do WhatsApp, através do número de contato
              disponível no site.
            </p>
          </section>

          {/* 3. Uso Permitido */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              3. Uso Permitido do Site
            </h2>
            <p>Ao utilizar este site, você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Utilizar o site apenas para fins legais e de acordo com estes
                Termos de Uso;
              </li>
              <li>
                Navegar pelo site de forma respeitosa, sem tentar obter acesso
                não autorizado a áreas restritas, sistemas ou redes conectadas
                ao servidor;
              </li>
              <li>
                Não utilizar robôs, scrapers, ferramentas automatizadas ou
                qualquer meio não autorizado para acessar, copiar ou monitorar
                o conteúdo do site;
              </li>
              <li>
                Não tentar interferir, danificar, desabilitar, sobrecarregar ou
                prejudicar o funcionamento do site;
              </li>
              <li>
                Não reproduzir, duplicar, copiar, vender ou revender qualquer
                parte do site sem autorização prévia e expressa do Balneário
                Esperança;
              </li>
              <li>
                Não utilizar o site para transmitir qualquer conteúdo
                ilegal, fraudulento, difamatório ou que viole direitos de
                terceiros.
              </li>
            </ul>
          </section>

          {/* 4. Propriedade Intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              4. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo disponível neste site, incluindo, mas não se
              limitando a textos, imagens, logotipos, ícones, fotografias, vídeos,
              design, layout, código-fonte e demais materiais, é de propriedade
              exclusiva do Balneário Esperança ou de seus respectivos titulares,
              sendo protegido pelas leis brasileiras de propriedade intelectual e
              direitos autorais.
            </p>
            <p>
              É expressamente proibida a reprodução, distribuição, modificação,
              exibição pública, utilização ou criação de obras derivadas a
              partir de qualquer conteúdo deste site, sem autorização prévia e
              por escrito do Balneário Esperança.
            </p>
            <p>
              O nome &quot;Balneário Esperança&quot;, seu logotipo e demais
              marcas são de propriedade do estabelecimento e seu uso não
              autorizado constitui violação de direitos de marca.
            </p>
          </section>

          {/* 5. Limitação de Responsabilidade */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              5. Limitação de Responsabilidade
            </h2>
            <p>
              O site do Balneário Esperança é disponibilizado &quot;como
              está&quot; e &quot;conforme disponível&quot;. O Balneário Esperança
              não garante que o site estará disponível de forma ininterrupta,
              livre de erros, vírus ou outros componentes prejudiciais.
            </p>
            <p>
              O Balneário Esperança não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Danos diretos, indiretos, incidentais ou consequenciais
                decorrentes do uso ou da impossibilidade de uso do site;
              </li>
              <li>
                Interrupções temporárias no acesso ao site por motivos de
                manutenção técnica, atualizações ou falhas no servidor de
                hospedagem;
              </li>
              <li>
                Conteúdo ou serviços de terceiros acessíveis por meio de links
                disponíveis no site, como Google Maps e WhatsApp;
              </li>
              <li>
                Informações incorretas ou desatualizadas, embora nos
                esforcemos para manter o conteúdo sempre atualizado;
              </li>
              <li>
                Qualquer transação ou comunicação realizada por meio do
                WhatsApp, já que este site não intermediou nem armazenou
                nenhuma informação dessas interações.
              </li>
            </ul>
          </section>

          {/* 6. Links para Terceiros */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              6. Links para Sites de Terceiros
            </h2>
            <p>
              Este site pode conter links para sites e serviços de terceiros, como
              Google Maps, WhatsApp e Instagram. Esses links são disponibilizados
              apenas para conveniência do visitante e não implicam endosso,
              parceria ou responsabilidade pelo conteúdo, políticas de privacidade
              ou práticas desses sites de terceiros.
            </p>
            <p>
              Recomendamos que o visitante revise as políticas de privacidade e
              termos de uso de cada site de terceiro antes de utilizá-los. O
              Balneário Esperança não se responsabiliza por qualquer dano ou
              prejuízo decorrente do acesso a sites de terceiros por meio dos
              links disponibilizados.
            </p>
          </section>

          {/* 7. Disponibilidade de Serviços */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              7. Disponibilidade dos Serviços de Locação
            </h2>
            <p>
              As informações sobre disponibilidade de datas, valores,
              condições de locação e demais detalhes sobre os serviços do
              Balneário Esperança apresentados no site são de caráter
              informativo. As condições reais, incluindo valores e
              disponibilidade, são confirmadas exclusivamente por meio do
              atendimento via WhatsApp.
            </p>
            <p>
              O Balneário Esperança reserva-se o direito de alterar preços,
              condições de uso do espaço, horários de funcionamento e demais
              políticas do estabelecimento sem aviso prévio no site.
            </p>
          </section>

          {/* 8. Proteção de Dados */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              8. Proteção de Dados
            </h2>
            <p>
              Para informações detalhadas sobre como tratamos e protegemos seus
              dados pessoais, consulte nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-emerald-600 hover:text-emerald-700 underline font-medium"
              >
                Política de Privacidade
              </Link>
              . Para informações sobre o uso de cookies no site, consulte nossa{" "}
              <Link
                href="/politica-de-cookies"
                className="text-emerald-600 hover:text-emerald-700 underline font-medium"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </section>

          {/* 9. Legislação Aplicável */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              9. Legislação Aplicável e Foro
            </h2>
            <p>
              Estes Termos de Uso são regidos pela legislação brasileira, em
              especial a Lei nº 13.709/2018 (LGPD), o Marco Civil da Internet
              (Lei nº 12.965/2014) e o Código de Defesa do Consumidor (Lei nº
              8.078/1990).
            </p>
            <p>
              Para a resolução de quaisquer litígios decorrentes destes Termos
              de Uso, fica eleito o foro da comarca de Breu Branco, Estado do
              Pará, com renúncia expressa a qualquer outro, por mais privilegiado
              que seja.
            </p>
          </section>

          {/* 10. Contato */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              10. Contato
            </h2>
            <p>
              Para dúvidas, sugestões ou esclarecimentos sobre estes Termos de
              Uso, entre em contato conosco pelo WhatsApp:
            </p>
            <a
              href="https://wa.me/559491062785?text=Olá! Tenho uma dúvida sobre os Termos de Uso do site do Balneário Esperança."
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
