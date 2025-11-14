'use client';

import { useState } from 'react';
import { BookOpen, Play, HelpCircle, Settings, MessageCircle, Video, Smartphone, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/custom/navbar';

export default function TutorialPage() {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const sections = [
    {
      id: 'intro',
      title: 'Introdução ao App',
      icon: BookOpen,
      color: 'bg-[#A3D8F4]',
      content: {
        description: 'Bem-vindo ao Hey, Vet! - o app mais completo para cuidar do seu pet.',
        topics: [
          'O Hey, Vet! é uma plataforma completa que conecta tutores, pets e veterinários',
          'Oferecemos funcionalidades de vacinação, alimentação, saúde e comunicação',
          'Tecnologia de IA para análise comportamental e diagnóstico preliminar',
          'Comunidade ativa com eventos, grupos e adoção responsável'
        ]
      }
    },
    {
      id: 'navegacao',
      title: 'Navegação Básica',
      icon: Smartphone,
      color: 'bg-[#B8E4C9]',
      content: {
        description: 'Entenda como navegar pelas principais áreas do app.',
        topics: [
          'Home: Visão geral dos seus pets e alertas importantes',
          'Pets: Cadastro e gerenciamento dos seus animais',
          'Vacinas: Calendário, histórico e busca de clínicas',
          'Alimentação: Recomendações, receitas e comparador de preços',
          'Comunicação: Biblioteca de sons e análise comportamental',
          'Saúde: Doenças, sintomas e conexão com veterinários',
          'Comunidade: Eventos, adoção e grupos de interesse'
        ]
      }
    },
    {
      id: 'cadastro-pet',
      title: 'Cadastro do Pet',
      icon: Award,
      color: 'bg-[#D8C7FF]',
      content: {
        description: 'Como adicionar e gerenciar os perfis dos seus pets.',
        topics: [
          'Acesse a aba "Pets" no menu inferior',
          'Clique em "Adicionar Pet" ou no botão "+"',
          'Preencha: nome, espécie, raça, idade, peso, sexo',
          'Adicione foto do seu pet (opcional)',
          'Informe alergias, condições especiais e histórico médico',
          'Salve e pronto! Seu pet está cadastrado'
        ]
      }
    },
    {
      id: 'vacinas',
      title: 'Agendamento de Vacinas',
      icon: Play,
      color: 'bg-[#F7D9D9]',
      content: {
        description: 'Passo a passo para usar o calendário de vacinação.',
        topics: [
          'Acesse "Vacinas" no menu',
          'Selecione o pet que deseja vacinar',
          'Veja o calendário com vacinas recomendadas',
          'Marque vacinas como "Aplicada" após a vacinação',
          'Configure lembretes automáticos para próximas doses',
          'Use "Buscar Clínicas" para encontrar locais próximos',
          'Compare preços entre diferentes estabelecimentos'
        ]
      }
    },
    {
      id: 'ia',
      title: 'Funcionalidade de IA',
      icon: Video,
      color: 'bg-[#A3D8F4]',
      content: {
        description: 'Como usar a análise de vídeos e sons com Inteligência Artificial.',
        topics: [
          'Análise de Comportamento: Grave vídeo do pet e receba insights',
          'Análise de Sons: Entenda latidos e miados do seu pet',
          'Diagnóstico de Sintomas: IA identifica possíveis problemas de saúde',
          'Envio ao Veterinário: Compartilhe análises com profissionais',
          'Dica: Grave em boa iluminação e com o pet no centro',
          'Resultados em segundos com recomendações práticas'
        ]
      }
    },
    {
      id: 'marketplace',
      title: 'Marketplace e Compras',
      icon: MessageCircle,
      color: 'bg-[#B8E4C9]',
      content: {
        description: 'Navegação pelo marketplace de produtos e serviços.',
        topics: [
          'Acesse "Alimentação" para ver rações recomendadas',
          'Use filtros por porte, idade e necessidades especiais',
          'Compare preços entre lojas físicas e online',
          'Veja avaliações de outros tutores',
          'Clique em "Ver Loja" para ser direcionado',
          'Receitas naturais aprovadas por veterinários disponíveis'
        ]
      }
    },
    {
      id: 'chatbot',
      title: 'Uso do Chatbot',
      icon: MessageCircle,
      color: 'bg-[#D8C7FF]',
      content: {
        description: 'Interação e suporte rápido através do chatbot.',
        topics: [
          'Clique no ícone de chat no canto inferior direito',
          'Digite sua dúvida ou selecione opções sugeridas',
          'Receba respostas instantâneas sobre funcionalidades',
          'Solicite ajuda para navegar no app',
          'Tire dúvidas sobre saúde, alimentação e comportamento',
          'Disponível 24/7 para auxiliar você'
        ]
      }
    },
    {
      id: 'feedback',
      title: 'Atualizações e Feedback',
      icon: Settings,
      color: 'bg-[#F7D9D9]',
      content: {
        description: 'Como enviar sugestões e acompanhar novidades.',
        topics: [
          'Acesse "Configurações" no menu',
          'Clique em "Enviar Feedback"',
          'Descreva sua sugestão ou reporte problemas',
          'Acompanhe o status da sua solicitação',
          'Receba notificações sobre novas funcionalidades',
          'Participe de pesquisas para melhorar o app'
        ]
      }
    },
    {
      id: 'veterinarios',
      title: 'Contato com Veterinários',
      icon: Video,
      color: 'bg-[#A3D8F4]',
      content: {
        description: 'Utilização de telemedicina e consultas virtuais.',
        topics: [
          'Acesse "Saúde" e depois "Enviar ao Veterinário"',
          'Selecione o veterinário cadastrado',
          'Grave vídeo do pet mostrando sintomas',
          'Descreva detalhadamente o que observou',
          'Envie e aguarde resposta do profissional',
          'Agende consultas presenciais quando necessário',
          'Histórico completo de consultas disponível'
        ]
      }
    },
    {
      id: 'configuracoes',
      title: 'Configurações e Suporte',
      icon: Settings,
      color: 'bg-[#B8E4C9]',
      content: {
        description: 'Personalizações e assistência técnica.',
        topics: [
          'Acesse "Configurações" no menu principal',
          'Personalize notificações e alertas',
          'Configure preferências de privacidade',
          'Gerencie sua assinatura e plano',
          'Acesse FAQ para dúvidas comuns',
          'Entre em contato com suporte técnico',
          'Faça backup dos dados dos seus pets'
        ]
      }
    }
  ];

  const faqs = [
    {
      pergunta: 'O app é gratuito?',
      resposta: 'Sim! Oferecemos um plano gratuito com funcionalidades básicas e um trial de 7 dias do plano Premium sem necessidade de cartão de crédito.'
    },
    {
      pergunta: 'Posso cadastrar mais de um pet?',
      resposta: 'No plano gratuito você pode cadastrar 1 pet. No plano Premium, pets ilimitados!'
    },
    {
      pergunta: 'A análise de IA substitui o veterinário?',
      resposta: 'Não! A IA oferece análises preliminares e insights, mas nunca substitui a consulta com um veterinário profissional.'
    },
    {
      pergunta: 'Como funciona o comparador de preços?',
      resposta: 'Buscamos preços em lojas físicas e online da sua região, mostrando as melhores opções para você economizar.'
    },
    {
      pergunta: 'Posso cancelar minha assinatura a qualquer momento?',
      resposta: 'Sim! Você pode cancelar quando quiser, sem multas ou taxas adicionais.'
    }
  ];

  const activeContent = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7E9] to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#A3D8F4]/20 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-[#A3D8F4]" />
            <span className="text-sm font-semibold text-gray-700">Tutorial Completo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guia do Usuário
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Como tirar o máximo do Hey, Vet!
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="p-4 rounded-2xl sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Seções</h3>
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      activeSection === section.id
                        ? `${section.color} text-white`
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <section.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{section.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {activeContent && (
              <Card className="p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${activeContent.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                    <activeContent.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{activeContent.title}</h2>
                    <p className="text-gray-600 mt-1">{activeContent.content.description}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <ul className="space-y-3">
                    {activeContent.content.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`${activeContent.color} w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-700">{topic}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeSection === 'intro' && (
                  <div className="mt-6 bg-gradient-to-r from-[#A3D8F4]/10 to-[#D8C7FF]/10 p-6 rounded-2xl">
                    <h3 className="font-bold text-gray-900 mb-3">Recursos Principais:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#A3D8F4]"></div>
                        <span className="text-sm text-gray-700">Calendário de Vacinação Inteligente</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#B8E4C9]"></div>
                        <span className="text-sm text-gray-700">Análise Comportamental com IA</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#D8C7FF]"></div>
                        <span className="text-sm text-gray-700">Telemedicina Veterinária</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#F7D9D9]"></div>
                        <span className="text-sm text-gray-700">Comunidade e Eventos</span>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            )}

            {/* FAQs */}
            <Card className="p-8 rounded-2xl mt-6">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-8 h-8 text-[#D8C7FF]" />
                <h2 className="text-2xl font-bold text-gray-900">Perguntas Frequentes</h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl">
                    <p className="font-semibold text-gray-900 mb-2">{faq.pergunta}</p>
                    <p className="text-gray-600 text-sm">{faq.resposta}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Suporte */}
            <Card className="p-8 rounded-2xl mt-6 bg-gradient-to-br from-[#A3D8F4]/10 to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Precisa de Ajuda?</h3>
              <p className="text-gray-600 mb-6">
                Nossa equipe está pronta para ajudar você a aproveitar ao máximo o Hey, Vet!
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#A3D8F4] text-white rounded-xl">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat com Suporte
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <Video className="w-4 h-4 mr-2" />
                  Vídeos Tutoriais
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
