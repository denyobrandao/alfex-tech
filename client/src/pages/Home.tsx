import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Mail, Phone, Linkedin, Globe, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * Alfex – Solução em Tecnologia
 * Design: Minimalist Corporate - Swiss Design Influence
 * Colors: White, Light Gray, Dark Gray, Deep Blue (#0052CC)
 * Typography: Poppins (headings), Inter (body)
 */

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Consultoria em Tecnologia",
      description: "Analisamos o ambiente tecnológico da empresa para identificar melhorias, reduzir custos e aumentar a eficiência operacional.",
      items: [
        "Diagnóstico de infraestrutura de TI",
        "Planejamento tecnológico",
        "Estratégias de modernização de sistemas",
        "Otimização de processos com tecnologia"
      ]
    },
    {
      title: "Infraestrutura e Redes",
      description: "Implementação, organização e melhoria da infraestrutura tecnológica da empresa.",
      items: [
        "Configuração de redes",
        "Estruturação de servidores",
        "Segurança da informação",
        "Monitoramento e otimização de sistemas"
      ]
    },
    {
      title: "Transformação Digital",
      description: "Ajudamos empresas a modernizar processos e integrar novas tecnologias para melhorar a produtividade e competitividade.",
      items: [
        "Automação de processos",
        "Integração de sistemas",
        "Implementação de ferramentas digitais",
        "Suporte à inovação tecnológica"
      ]
    },
    {
      title: "Suporte Estratégico em TI",
      description: "A Alfex atua como um parceiro tecnológico para auxiliar empresas na tomada de decisões relacionadas à tecnologia.",
      items: [
        "Avaliação de investimentos em TI",
        "Planejamento de crescimento tecnológico",
        "Acompanhamento de projetos",
        "Apoio na escolha de soluções e fornecedores"
      ]
    }
  ];

  const differentials = [
    "Visão estratégica de tecnologia",
    "Soluções personalizadas para cada empresa",
    "Experiência prática em ambientes corporativos",
    "Foco em resultados e eficiência"
  ];

  const values = [
    { title: "Compromisso com resultados", icon: "🎯" },
    { title: "Transparência nas relações", icon: "🤝" },
    { title: "Inovação contínua", icon: "💡" },
    { title: "Soluções práticas e eficientes", icon: "⚙️" },
    { title: "Foco no cliente", icon: "👥" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Alfex</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition">Serviços</a>
            <a href="#valores" className="text-gray-700 hover:text-blue-600 transition">Valores</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48 opacity-40"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Alfex – Solução em Tecnologia
            </h1>
            <p className="text-2xl text-blue-600 font-semibold mb-8">
              Conectando soluções, transformando resultados
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl">
              Transformamos a tecnologia em uma aliada estratégica do seu negócio, impulsionando eficiência, inovação e crescimento sustentável.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
              Solicitar Consultoria
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-64 opacity-30" style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663110680933/UZnCnyK52yhs43Md4C8nJo/alfex-hero-banner-ctwxU4Kp57odDMr6DvYnXC.webp')",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        }}></div>
      </section>

      {/* Divider Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Quem Somos</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                A Alfex – Solução em Tecnologia nasceu com o propósito de ajudar empresas a utilizarem a tecnologia de forma estratégica, eficiente e alinhada aos seus objetivos de negócio.
              </p>
              <p>
                Com experiência prática em ambientes corporativos e projetos tecnológicos, a Alfex atua como parceira das empresas na análise, planejamento e implementação de soluções tecnológicas que aumentam produtividade, segurança e competitividade.
              </p>
              <p>
                Mais do que oferecer serviços técnicos, nossa missão é entender os desafios do cliente e conectar as melhores soluções para gerar resultados reais.
              </p>
              <p className="text-blue-600 font-semibold">
                Acreditamos que a tecnologia deve ser simples, eficiente e acessível, funcionando como uma ferramenta de crescimento para o negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* Mission */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Conectar empresas às melhores soluções tecnológicas, impulsionando eficiência, inovação e resultados sustentáveis.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Nossa Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser reconhecida como uma consultoria de tecnologia confiável e estratégica, ajudando empresas a evoluírem por meio da transformação digital.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Nossos Valores</h3>
              <ul className="space-y-2">
                {values.map((value, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-xl mt-1">{value.icon}</span>
                    <span>{value.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Nossos Serviços</h2>
          
          {/* Service Tabs */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Service List */}
            <div className="space-y-3">
              {services.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                    activeService === idx
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-900 border border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </button>
              ))}
            </div>

            {/* Right: Service Details */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {services[activeService].description}
              </p>
              <p className="text-sm text-gray-600 font-semibold mb-4">Inclui:</p>
              <ul className="space-y-3">
                {services[activeService].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Diferenciais da Alfex</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {differentials.map((diff, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <p className="text-gray-900 font-semibold">{diff}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-blue-600 font-semibold mt-12">
            Nosso objetivo é transformar a tecnologia em uma aliada do crescimento do seu negócio.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contato</h2>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              Alfex – Solução em Tecnologia
            </p>
            <p className="text-lg text-gray-700 mb-12">
              Conectando soluções, transformando resultados
            </p>
            <p className="text-gray-700 mb-12 leading-relaxed">
              Entre em contato para entender como a tecnologia pode impulsionar sua empresa.
            </p>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a href="tel:" className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition">
                <Phone className="text-blue-600" size={28} />
                <span className="text-gray-700 font-semibold">Telefone</span>
                <span className="text-gray-600 text-sm">[Número a definir]</span>
              </a>

              <a href="mailto:" className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition">
                <Mail className="text-blue-600" size={28} />
                <span className="text-gray-700 font-semibold">E-mail</span>
                <span className="text-gray-600 text-sm">[Email a definir]</span>
              </a>

              <a href="#" className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition">
                <Linkedin className="text-blue-600" size={28} />
                <span className="text-gray-700 font-semibold">LinkedIn</span>
                <span className="text-gray-600 text-sm">Visite nosso perfil</span>
              </a>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg">
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="font-bold text-lg">Alfex</span>
              </div>
              <p className="text-gray-400 text-sm">Solução em Tecnologia</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#sobre" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Serviços</a></li>
                <li><a href="#valores" className="hover:text-white transition">Valores</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Consultoria</a></li>
                <li><a href="#" className="hover:text-white transition">Infraestrutura</a></li>
                <li><a href="#" className="hover:text-white transition">Transformação Digital</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:" className="hover:text-white transition">E-mail</a></li>
                <li><a href="tel:" className="hover:text-white transition">Telefone</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Alfex – Solução em Tecnologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
