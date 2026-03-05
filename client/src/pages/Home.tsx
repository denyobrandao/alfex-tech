import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Mail, Phone, MessageCircle, Globe, CheckCircle2, ArrowRight, Zap, Shield, Rocket, TrendingUp } from "lucide-react";
import { useState } from "react";

/**
 * Alfex – Soluções em Tecnologia
 * Design: Modern Minimalist Corporate with Teal/Green-Blue Brand Colors
 * Primary Color: #0B7A7A (Teal from logo)
 * Typography: Poppins (headings), Inter (body)
 * Enhanced with animations and visual depth
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
      ],
      icon: Zap
    },
    {
      title: "Transformação Digital",
      description: "Ajudamos empresas a modernizar processos e integrar novas tecnologias para melhorar a produtividade e competitividade.",
      items: [
        "Automação de processos",
        "Integração de sistemas",
        "Implementação de ferramentas digitais",
        "Suporte à inovação tecnológica"
      ],
      icon: Rocket
    },
    {
      title: "Suporte Estratégico em TI",
      description: "A Alfex atua como um parceiro tecnológico para auxiliar empresas na tomada de decisões relacionadas à tecnologia.",
      items: [
        "Avaliação de investimentos em TI",
        "Planejamento de crescimento tecnológico",
        "Acompanhamento de projetos",
        "Apoio na escolha de soluções e fornecedores"
      ],
      icon: TrendingUp
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
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-teal-100 z-50 shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663110680933/UZnCnyK52yhs43Md4C8nJo/alfex-logo-new_ca69ff65.png" 
              alt="Alfex Logo" 
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-700 hover:text-teal-600 transition font-medium">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-teal-600 transition font-medium">Serviços</a>
            <a href="#valores" className="text-gray-700 hover:text-teal-600 transition font-medium">Valores</a>
            <a href="#contato" className="text-gray-700 hover:text-teal-600 transition font-medium">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Gradient Background */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-white via-teal-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-100 rounded-full -mr-48 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-50 rounded-full -ml-36 opacity-40 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
              ✨ Transformação Digital Estratégica
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Alfex – Soluções em Tecnologia
            </h1>
            
            <p className="text-2xl text-teal-600 font-semibold mb-8">
              Conectando soluções, transformando resultados
            </p>
            
            <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl">
              Transformamos a tecnologia em uma aliada estratégica do seu negócio, impulsionando eficiência, inovação e crescimento sustentável através de soluções personalizadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/556699653101?text=Olá%20Alfex!%20Gostaria%20de%20solicitar%20uma%20consultoria%20em%20tecnologia." target="_blank" rel="noopener noreferrer">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition">
                  Solicitar Consultoria
                  <ChevronRight size={20} />
                </Button>
              </a>
              <a href="#sobre">
                <Button variant="outline" className="border-teal-300 text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg rounded-lg">
                  Saiba Mais
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-teal-200">
              <div>
                <p className="text-3xl font-bold text-teal-600">100+</p>
                <p className="text-gray-600">Empresas Atendidas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-600">19+</p>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-600">98%</p>
                <p className="text-gray-600">Satisfação de Clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Quem Somos</h2>
            <p className="text-center text-teal-600 font-semibold mb-12">Conheça nossa história e missão</p>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-center text-xl font-semibold text-gray-900">
                A Alfex – Soluções em Tecnologia nasceu com o propósito de ajudar empresas a utilizarem a tecnologia de forma estratégica, eficiente e alinhada aos seus objetivos de negócio.
              </p>
              <p>
                Com experiência prática em ambientes corporativos e projetos tecnológicos, a Alfex atua como parceira das empresas na análise, planejamento e implementação de soluções tecnológicas que aumentam produtividade, segurança e competitividade.
              </p>
              <p>
                Mais do que oferecer serviços técnicos, nossa missão é entender os desafios do cliente e conectar as melhores soluções para gerar resultados reais.
              </p>
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-6 mt-8">
                <p className="text-teal-900 font-semibold text-lg">
                  💡 Acreditamos que a tecnologia deve ser simples, eficiente e acessível, funcionando como uma ferramenta de crescimento para o negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section id="valores" className="py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Missão, Visão e Valores</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl border border-teal-200 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="text-teal-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Conectar empresas às melhores soluções tecnológicas, impulsionando eficiência, inovação e resultados sustentáveis.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl border border-teal-200 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-teal-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser reconhecida como uma consultoria de tecnologia confiável e estratégica, ajudando empresas a evoluírem por meio da transformação digital.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl border border-teal-200 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-teal-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
              <ul className="space-y-2">
                {values.map((value, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-lg">{value.icon}</span>
                    <span className="font-medium">{value.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Nossos Serviços</h2>
          <p className="text-center text-teal-600 font-semibold mb-16">Soluções completas para sua transformação digital</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Service List */}
            <div className="space-y-3">
              {services.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveService(idx)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex items-start gap-4 ${
                      activeService === idx
                        ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-xl scale-105"
                        : "bg-white text-gray-900 border border-teal-200 hover:border-teal-400 hover:shadow-md"
                    }`}
                  >
                    <IconComponent size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">{service.title}</h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Service Details */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl border border-teal-200 h-fit shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {services[activeService].description}
              </p>
              <p className="text-sm text-teal-700 font-semibold mb-4">Inclui:</p>
              <ul className="space-y-3">
                {services[activeService].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center">Diferenciais da Alfex</h2>
          <p className="text-center text-teal-100 mb-16 text-lg">Por que escolher a Alfex como sua parceira tecnológica</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {differentials.map((diff, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-teal-600" />
                </div>
                <p className="font-semibold text-lg">{diff}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg font-semibold text-teal-100">
            ✨ Nosso objetivo é transformar a tecnologia em uma aliada do crescimento do seu negócio.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vamos Conversar?</h2>
            <p className="text-lg text-teal-600 font-semibold mb-4">
              Entre em contato conosco
            </p>
            <p className="text-gray-700 mb-12 leading-relaxed">
              Estamos prontos para entender seus desafios e apresentar como a tecnologia pode impulsionar sua empresa. Solicite uma consultoria gratuita.
            </p>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a href="tel:+556699653101" className="flex flex-col items-center gap-3 p-8 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-200 hover:border-teal-400 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-teal-600" size={24} />
                </div>
                <span className="text-gray-900 font-semibold">Telefone</span>
                <span className="text-gray-600 text-sm">66 99653-0101</span>
              </a>

              <a href="mailto:contato@alfex.com.br" className="flex flex-col items-center gap-3 p-8 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-200 hover:border-teal-400 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-teal-600" size={24} />
                </div>
                <span className="text-gray-900 font-semibold">E-mail</span>
                <span className="text-gray-600 text-sm">contato@alfex.com.br</span>
              </a>

              <a href="https://wa.me/556699653101?text=Olá%20Alfex!%20Gostaria%20de%20entrar%20em%20contato." target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-8 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-200 hover:border-teal-400 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-teal-600" size={24} />
                </div>
                <span className="text-gray-900 font-semibold">WhatsApp</span>
                <span className="text-gray-600 text-sm">66 99653-0101</span>
              </a>
            </div>

            <a href="https://wa.me/556699653101?text=Olá%20Alfex!%20Gostaria%20de%20entrar%20em%20contato." target="_blank" rel="noopener noreferrer">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition flex items-center gap-2 mx-auto">
                Enviar Mensagem
                <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663110680933/UZnCnyK52yhs43Md4C8nJo/alfex-logo-dark_04df2c2a.png" 
              alt="Alfex Logo" 
              className="h-10 w-auto mb-4"
            />
              <p className="text-gray-400 text-sm">Soluções em Tecnologia</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#sobre" className="hover:text-teal-400 transition">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-teal-400 transition">Serviços</a></li>
                <li><a href="#valores" className="hover:text-teal-400 transition">Valores</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition">Consultoria</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Infraestrutura</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Transformação Digital</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:contato@alfex.com.br" className="hover:text-teal-400 transition">E-mail</a></li>
                <li><a href="tel:+556699653101" className="hover:text-teal-400 transition">Telefone</a></li>
                <li><a href="https://wa.me/556699653101" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Alfex – Soluções em Tecnologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
