'use client';

import { useState } from 'react';
import { Users, Calendar, MapPin, Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/custom/navbar';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'eventos' | 'adocao' | 'grupos'>('eventos');

  const eventos = [
    {
      id: 1,
      titulo: 'Feira de Adoção - Shopping Paulista',
      data: '25 de Janeiro, 2024',
      horario: '10h - 18h',
      local: 'Shopping Paulista - São Paulo, SP',
      tipo: 'Adoção',
      participantes: 234,
      imagem: '🐕',
      cor: 'bg-[#A3D8F4]'
    },
    {
      id: 2,
      titulo: 'Caminhada Pet no Parque Ibirapuera',
      data: '28 de Janeiro, 2024',
      horario: '8h - 11h',
      local: 'Parque Ibirapuera - São Paulo, SP',
      tipo: 'Evento Social',
      participantes: 156,
      imagem: '🐾',
      cor: 'bg-[#B8E4C9]'
    },
    {
      id: 3,
      titulo: 'Workshop: Adestramento Positivo',
      data: '02 de Fevereiro, 2024',
      horario: '14h - 17h',
      local: 'Centro de Treinamento PetSmart - São Paulo, SP',
      tipo: 'Workshop',
      participantes: 45,
      imagem: '🎓',
      cor: 'bg-[#D8C7FF]'
    },
    {
      id: 4,
      titulo: 'Encontro de Tutores de Golden Retriever',
      data: '05 de Fevereiro, 2024',
      horario: '16h - 19h',
      local: 'Parque Villa-Lobos - São Paulo, SP',
      tipo: 'Encontro',
      participantes: 89,
      imagem: '🐕',
      cor: 'bg-[#F7D9D9]'
    }
  ];

  const adocoes = [
    {
      id: 1,
      nome: 'Thor',
      especie: 'Cão',
      raca: 'Labrador Mix',
      idade: '2 anos',
      porte: 'Grande',
      abrigo: 'Abrigo Amigos dos Animais',
      cidade: 'São Paulo, SP',
      descricao: 'Thor é um cão dócil, brincalhão e ótimo com crianças. Castrado e vacinado.',
      imagem: '🐕',
      cor: 'bg-[#A3D8F4]'
    },
    {
      id: 2,
      nome: 'Luna',
      especie: 'Gato',
      raca: 'SRD',
      idade: '1 ano',
      porte: 'Médio',
      abrigo: 'Lar dos Gatinhos',
      cidade: 'São Paulo, SP',
      descricao: 'Luna é uma gatinha carinhosa e tranquila. Ideal para apartamento.',
      imagem: '🐱',
      cor: 'bg-[#D8C7FF]'
    },
    {
      id: 3,
      nome: 'Max',
      especie: 'Cão',
      raca: 'Poodle',
      idade: '5 anos',
      porte: 'Pequeno',
      abrigo: 'Resgate Pet',
      cidade: 'São Paulo, SP',
      descricao: 'Max é um cãozinho calmo, ideal para idosos. Muito companheiro.',
      imagem: '🐕',
      cor: 'bg-[#B8E4C9]'
    }
  ];

  const grupos = [
    {
      id: 1,
      nome: 'Tutores de Golden Retriever SP',
      membros: 1234,
      descricao: 'Grupo para tutores de Golden Retriever compartilharem experiências e organizarem encontros.',
      categoria: 'Raça Específica',
      cor: 'bg-[#F7D9D9]'
    },
    {
      id: 2,
      nome: 'Adoção Responsável São Paulo',
      membros: 5678,
      descricao: 'Conectando abrigos, ONGs e futuros tutores para adoções responsáveis.',
      categoria: 'Adoção',
      cor: 'bg-[#B8E4C9]'
    },
    {
      id: 3,
      nome: 'Pets em Apartamento',
      membros: 3456,
      descricao: 'Dicas e experiências de quem cria pets em apartamento.',
      categoria: 'Estilo de Vida',
      cor: 'bg-[#A3D8F4]'
    },
    {
      id: 4,
      nome: 'Alimentação Natural para Pets',
      membros: 2345,
      descricao: 'Receitas, dicas e informações sobre alimentação natural.',
      categoria: 'Alimentação',
      cor: 'bg-[#D8C7FF]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7E9] to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F7D9D9]/20 px-4 py-2 rounded-full mb-4">
            <Users className="w-5 h-5 text-[#F7D9D9]" />
            <span className="text-sm font-semibold text-gray-700">Comunidade Pet</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conecte-se com Outros Tutores
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Eventos, adoção responsável e grupos de interesse
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeTab === 'eventos' ? 'default' : 'outline'}
            onClick={() => setActiveTab('eventos')}
            className={activeTab === 'eventos' ? 'bg-[#A3D8F4] text-white' : ''}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Eventos
          </Button>
          <Button
            variant={activeTab === 'adocao' ? 'default' : 'outline'}
            onClick={() => setActiveTab('adocao')}
            className={activeTab === 'adocao' ? 'bg-[#B8E4C9] text-white' : ''}
          >
            <Heart className="w-4 h-4 mr-2" />
            Adoção
          </Button>
          <Button
            variant={activeTab === 'grupos' ? 'default' : 'outline'}
            onClick={() => setActiveTab('grupos')}
            className={activeTab === 'grupos' ? 'bg-[#D8C7FF] text-white' : ''}
          >
            <Users className="w-4 h-4 mr-2" />
            Grupos
          </Button>
        </div>

        {/* Eventos Tab */}
        {activeTab === 'eventos' && (
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {eventos.map((evento) => (
                <Card key={evento.id} className="p-6 rounded-2xl hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${evento.cor} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl`}>
                      {evento.imagem}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                        {evento.tipo}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 mt-2">{evento.titulo}</h3>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {evento.data} • {evento.horario}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {evento.local}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      {evento.participantes} participantes confirmados
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-[#A3D8F4] text-white rounded-xl">
                      Participar
                    </Button>
                    <Button variant="outline" className="rounded-xl">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Adoção Tab */}
        {activeTab === 'adocao' && (
          <div>
            <Card className="p-6 mb-8 rounded-2xl bg-gradient-to-br from-[#B8E4C9]/10 to-white">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#F7D9D9]" />
                <h2 className="text-xl font-bold text-gray-900">Adoção Responsável</h2>
              </div>
              <p className="text-gray-600">
                Encontre seu novo melhor amigo! Todos os pets estão castrados, vacinados e prontos para um lar amoroso.
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {adocoes.map((pet) => (
                <Card key={pet.id} className="p-6 rounded-2xl hover:shadow-xl transition-all">
                  <div className="text-center mb-4">
                    <div className={`${pet.cor} w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-3`}>
                      {pet.imagem}
                    </div>
                    <h3 className="font-bold text-xl text-gray-900">{pet.nome}</h3>
                    <p className="text-sm text-gray-600">{pet.raca}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Idade:</span>
                      <span className="font-semibold text-gray-900">{pet.idade}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Porte:</span>
                      <span className="font-semibold text-gray-900">{pet.porte}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Espécie:</span>
                      <span className="font-semibold text-gray-900">{pet.especie}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-xl mb-4">
                    <p className="text-sm text-gray-600">{pet.descricao}</p>
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    <p className="font-semibold">{pet.abrigo}</p>
                    <p>{pet.cidade}</p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#B8E4C9] to-[#A3D8F4] text-white rounded-xl">
                    <Heart className="w-4 h-4 mr-2" />
                    Quero Adotar
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Grupos Tab */}
        {activeTab === 'grupos' && (
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {grupos.map((grupo) => (
                <Card key={grupo.id} className="p-6 rounded-2xl hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">{grupo.nome}</h3>
                      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                        {grupo.categoria}
                      </span>
                    </div>
                    <div className={`${grupo.cor} text-white px-4 py-2 rounded-full`}>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-bold">{grupo.membros}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{grupo.descricao}</p>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-[#D8C7FF] text-white rounded-xl">
                      <Users className="w-4 h-4 mr-2" />
                      Participar
                    </Button>
                    <Button variant="outline" className="rounded-xl">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <Card className="p-8 rounded-2xl mt-8 bg-gradient-to-br from-[#D8C7FF]/10 to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Comunidade em Números
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#A3D8F4] mb-2">12.7K</div>
                  <p className="text-sm text-gray-600">Membros Ativos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#B8E4C9] mb-2">234</div>
                  <p className="text-sm text-gray-600">Grupos Ativos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D8C7FF] mb-2">1.2K</div>
                  <p className="text-sm text-gray-600">Pets Adotados</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F7D9D9] mb-2">89</div>
                  <p className="text-sm text-gray-600">Eventos/Mês</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
