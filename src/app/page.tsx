'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, Shield, Calendar, Stethoscope, ShoppingBag, MessageCircle, 
  ArrowRight, Check, Sparkles, Brain, Video, Users, Trophy,
  Smartphone, Globe, Zap, Star, TrendingUp, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LandingPage() {
  const [activePlan, setActivePlan] = useState<'monthly' | 'yearly'>('monthly');

  const features = [
    {
      icon: Calendar,
      title: 'Calendário de Vacinação Inteligente',
      description: 'Alertas automáticos, histórico completo e lembretes personalizados para cada pet',
      color: 'bg-[#A3D8F4]',
      badge: 'Essencial'
    },
    {
      icon: Brain,
      title: 'IA para Análise de Comportamento',
      description: 'Grave vídeos do seu pet e receba análises comportamentais detalhadas com IA',
      color: 'bg-[#D8C7FF]',
      badge: 'Premium'
    },
    {
      icon: Stethoscope,
      title: 'Diagnóstico de Sintomas',
      description: 'Identifique doenças tradicionais e modernas com biblioteca completa e IA',
      color: 'bg-[#B8E4C9]',
      badge: 'Novo'
    },
    {
      icon: ShoppingBag,
      title: 'Alimentação Personalizada',
      description: 'Recomendações de rações, receitas naturais e comparador de preços',
      color: 'bg-[#F7D9D9]',
      badge: 'Popular'
    },
    {
      icon: MessageCircle,
      title: 'Comunicação Pet com IA',
      description: 'Entenda latidos e miados com biblioteca de sons e análise de áudio por IA',
      color: 'bg-[#D8C7FF]',
      badge: 'Premium'
    },
    {
      icon: Video,
      title: 'Telemedicina Veterinária',
      description: 'Envie vídeos para veterinários e receba diagnósticos profissionais',
      color: 'bg-[#A3D8F4]',
      badge: 'Novo'
    },
    {
      icon: Users,
      title: 'Comunidade Pet',
      description: 'Eventos locais, grupos de adoção e conexão com outros tutores',
      color: 'bg-[#B8E4C9]',
      badge: 'Novo'
    },
    {
      icon: Trophy,
      title: 'Gamificação e Recompensas',
      description: 'Complete desafios, ganhe conquistas e compartilhe nas redes sociais',
      color: 'bg-[#F7D9D9]',
      badge: 'Novo'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Tutores Ativos' },
    { value: '100K+', label: 'Pets Cadastrados' },
    { value: '5K+', label: 'Veterinários' },
    { value: '4.9★', label: 'Avaliação' }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Tutora de 3 cachorros',
      avatar: '🐕',
      text: 'O Hey, Vet! mudou completamente como cuido dos meus pets. Os alertas de vacina são perfeitos!'
    },
    {
      name: 'Dr. Carlos Mendes',
      role: 'Veterinário',
      avatar: '👨‍⚕️',
      text: 'Ferramenta essencial para minha clínica. Recebo vídeos dos tutores e posso avaliar antes da consulta.'
    },
    {
      name: 'Ana Costa',
      role: 'Tutora de 2 gatos',
      avatar: '🐱',
      text: 'A análise de comportamento por IA me ajudou a entender a ansiedade do meu gato. Incrível!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7E9] via-white to-[#FFF7E9]">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/67150f71-479c-4008-bb52-fc1c3b5c79cf.png" 
                  alt="Hey, Vet! Logo" 
                  className="h-14 w-14 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#B8E4C9] rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900 block">
                  Hey, <span className="text-[#A3D8F4]">Vet!</span>
                </span>
                <span className="text-xs text-gray-500">Cuidando do seu melhor amigo</span>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                  Entrar
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-gradient-to-r from-[#A3D8F4] to-[#B8E4C9] hover:from-[#8BC5E8] hover:to-[#A0D4B5] text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Começar Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Melhorado */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#A3D8F4]/20 to-[#D8C7FF]/20 px-6 py-3 rounded-full mb-8 border border-[#A3D8F4]/30">
            <Sparkles className="w-5 h-5 text-[#A3D8F4] animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Mais de 50 mil tutores confiam no Hey, Vet!</span>
            <Star className="w-5 h-5 text-[#F7D9D9] fill-[#F7D9D9]" />
          </div>
          
          {/* Logo Hero */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#A3D8F4] to-[#D8C7FF] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/67150f71-479c-4008-bb52-fc1c3b5c79cf.png" 
                alt="Hey, Vet! Logo" 
                className="relative h-28 w-28 md:h-36 md:w-36 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#B8E4C9] text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                IA Integrada
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-2">
                Hey, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3D8F4] to-[#D8C7FF]">Vet!</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                O app mais completo para seu pet 🐾
              </p>
            </div>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cuide da saúde do seu pet com <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3D8F4] via-[#D8C7FF] to-[#B8E4C9]">
              Inteligência Artificial
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Vacinação, alimentação, diagnóstico de sintomas, análise comportamental e conexão com veterinários. Tudo em um só lugar.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/register">
              <Button size="lg" className="bg-gradient-to-r from-[#A3D8F4] to-[#B8E4C9] hover:from-[#8BC5E8] hover:to-[#A0D4B5] text-gray-900 font-bold px-10 py-7 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                <Zap className="mr-2 w-6 h-6" />
                Começar Trial de 7 Dias
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="border-2 border-[#A3D8F4] text-gray-900 font-semibold px-10 py-7 text-lg rounded-2xl hover:bg-[#A3D8F4]/10 transition-all">
                <Brain className="mr-2 w-6 h-6" />
                Ver Funcionalidades
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-[#B8E4C9] bg-[#B8E4C9]/20 rounded-full p-1" />
              <span className="font-medium">7 dias grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-[#B8E4C9] bg-[#B8E4C9]/20 rounded-full p-1" />
              <span className="font-medium">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-[#B8E4C9] bg-[#B8E4C9]/20 rounded-full p-1" />
              <span className="font-medium">Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#A3D8F4]" />
              <span className="font-medium">Dados 100% seguros</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#A3D8F4]/10 via-[#D8C7FF]/10 to-[#B8E4C9]/10 py-12 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#A3D8F4] to-[#D8C7FF] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid - Melhorado */}
      <div id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D8C7FF]/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#D8C7FF]" />
            <span className="text-sm font-semibold text-gray-700">Funcionalidades Completas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tudo que seu pet precisa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Do básico ao avançado, com tecnologia de IA para cuidar melhor do seu melhor amigo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 rounded-2xl hover:scale-105 hover:border-[#A3D8F4]/50 group relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <span className="text-xs font-bold bg-gradient-to-r from-[#A3D8F4] to-[#D8C7FF] text-white px-3 py-1 rounded-full">
                  {feature.badge}
                </span>
              </div>
              <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-b from-white to-[#FFF7E9] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que dizem nossos usuários
            </h2>
            <p className="text-xl text-gray-600">Milhares de tutores e veterinários confiam no Hey, Vet!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 rounded-2xl border-2 border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F7D9D9] fill-[#F7D9D9]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section - Melhorado */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Escolha seu plano
          </h2>
          <p className="text-xl text-gray-600 mb-8">Comece com 7 dias grátis, sem compromisso</p>

          <div className="inline-flex gap-2 bg-gray-100 p-1 rounded-xl mb-8">
            <Button
              variant={activePlan === 'monthly' ? 'default' : 'ghost'}
              onClick={() => setActivePlan('monthly')}
              className={activePlan === 'monthly' ? 'bg-white shadow-md text-gray-900' : 'text-gray-600'}
            >
              Mensal
            </Button>
            <Button
              variant={activePlan === 'yearly' ? 'default' : 'ghost'}
              onClick={() => setActivePlan('yearly')}
              className={activePlan === 'yearly' ? 'bg-white shadow-md text-gray-900' : 'text-gray-600'}
            >
              Anual
              <span className="ml-2 text-xs bg-[#B8E4C9] text-gray-900 px-2 py-0.5 rounded-full font-bold">
                -17%
              </span>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <Card className="p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gratuito</h3>
              <div className="text-5xl font-black text-gray-900 mb-2">
                R$ 0
              </div>
              <div className="text-gray-600">Para sempre</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">1 pet cadastrado</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Vacinas básicas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Alimentação simples</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Sintomas limitados</span>
              </li>
            </ul>
            <Link href="/auth/register">
              <Button variant="outline" className="w-full border-2 border-[#A3D8F4] text-gray-900 font-semibold py-6 rounded-xl hover:bg-[#A3D8F4]/10">
                Começar Grátis
              </Button>
            </Link>
          </Card>

          {/* Premium Plan */}
          <Card className="p-8 rounded-2xl border-4 border-[#A3D8F4] bg-gradient-to-br from-[#A3D8F4]/5 to-white relative overflow-hidden hover:shadow-2xl transition-all scale-105">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#A3D8F4] to-[#D8C7FF] text-white text-center py-2 font-bold text-sm">
              ⭐ MAIS POPULAR
            </div>
            <div className="text-center mb-6 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#A3D8F4] to-[#D8C7FF] mb-2">
                R$ {activePlan === 'monthly' ? '29,90' : '24,99'}
              </div>
              <div className="text-gray-600">/mês</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Pets ilimitados</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">IA para análise de vídeos</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Calendário completo</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Busca de clínicas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Comparador de preços</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Comunicação pet completa</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Telemedicina veterinária</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Relatórios e gráficos</span>
              </li>
            </ul>
            <Link href="/auth/register">
              <Button className="w-full bg-gradient-to-r from-[#A3D8F4] to-[#D8C7FF] hover:from-[#8BC5E8] hover:to-[#C0B3F0] text-white font-bold py-6 rounded-xl shadow-lg">
                <Sparkles className="mr-2 w-5 h-5" />
                Começar Trial de 7 Dias
              </Button>
            </Link>
          </Card>

          {/* Vet Pro Plan */}
          <Card className="p-8 rounded-2xl border-2 border-[#D8C7FF] hover:shadow-xl transition-all">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vet Pro</h3>
              <div className="text-5xl font-black text-gray-900 mb-2">
                R$ 99,90
              </div>
              <div className="text-gray-600">/mês</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#D8C7FF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Perfil profissional</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#D8C7FF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Agendamento online</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#D8C7FF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Receba vídeos de tutores</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#D8C7FF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Chat com pacientes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#D8C7FF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Dashboard de pacientes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#D8C7FF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Consultas virtuais</span>
              </li>
            </ul>
            <Link href="/auth/register">
              <Button variant="outline" className="w-full border-2 border-[#D8C7FF] text-gray-900 font-semibold py-6 rounded-xl hover:bg-[#D8C7FF]/10">
                Cadastrar como Veterinário
              </Button>
            </Link>
          </Card>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-[#A3D8F4] via-[#D8C7FF] to-[#B8E4C9] py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/67150f71-479c-4008-bb52-fc1c3b5c79cf.png" 
                alt="Hey, Vet! Logo" 
                className="h-20 w-20 rounded-2xl shadow-2xl mx-auto"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pronto para revolucionar o cuidado com seu pet?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a mais de 50 mil tutores que já confiam no Hey, Vet!
            </p>
            <Link href="/auth/register">
              <Button size="lg" className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-12 py-7 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                <Zap className="mr-2 w-6 h-6" />
                Começar Agora - É Grátis
                <Heart className="ml-2 w-6 h-6 text-[#F7D9D9]" />
              </Button>
            </Link>
            <p className="text-white/80 mt-4 text-sm">
              7 dias grátis • Sem cartão de crédito • Cancele quando quiser
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/67150f71-479c-4008-bb52-fc1c3b5c79cf.png" 
                  alt="Hey, Vet! Logo" 
                  className="h-10 w-10 rounded-lg"
                />
                <span className="text-xl font-bold">Hey, Vet!</span>
              </div>
              <p className="text-gray-400 text-sm">
                O app mais completo para cuidar do seu melhor amigo com tecnologia e carinho.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Para Veterinários</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Hey, Vet! - Cuidando do seu melhor amigo 🐾 | Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
