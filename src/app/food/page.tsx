'use client';

import { useState } from 'react';
import { ShoppingBag, Search, Filter, MapPin, ExternalLink, ChefHat, Apple, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/custom/navbar';

export default function FoodPage() {
  const [activeTab, setActiveTab] = useState<'racoes' | 'natural' | 'receitas'>('racoes');

  const racoes = [
    {
      id: 1,
      nome: 'Royal Canin Mini Adult',
      tipo: 'Ração Premium',
      porte: 'Pequeno',
      idade: 'Adulto',
      preco: 189.90,
      loja: 'Petlove',
      cidade: 'São Paulo',
      link: '#',
      rating: 4.8
    },
    {
      id: 2,
      nome: 'Premier Nattu Cães Adultos',
      tipo: 'Ração Super Premium',
      porte: 'Médio/Grande',
      idade: 'Adulto',
      preco: 245.00,
      loja: 'Cobasi',
      cidade: 'São Paulo',
      link: '#',
      rating: 4.9
    },
    {
      id: 3,
      nome: 'Golden Gatos Adultos Frango',
      tipo: 'Ração Premium',
      porte: 'Todos',
      idade: 'Adulto',
      preco: 156.90,
      loja: 'Petz',
      cidade: 'São Paulo',
      link: '#',
      rating: 4.7
    }
  ];

  const alimentosNaturais = [
    {
      categoria: 'Proteínas Permitidas',
      items: ['Frango cozido', 'Carne bovina magra', 'Peixe (sem espinhas)', 'Ovo cozido'],
      cor: 'bg-[#B8E4C9]'
    },
    {
      categoria: 'Vegetais Seguros',
      items: ['Cenoura', 'Abóbora', 'Batata doce', 'Brócolis (pequenas quantidades)'],
      cor: 'bg-[#A3D8F4]'
    },
    {
      categoria: 'PROIBIDOS',
      items: ['Chocolate', 'Cebola', 'Alho', 'Uva/Passa', 'Abacate', 'Café'],
      cor: 'bg-[#F7D9D9]'
    }
  ];

  const receitas = [
    {
      id: 1,
      nome: 'Frango com Legumes para Cães',
      especie: 'Cão',
      ingredientes: ['300g frango', '100g cenoura', '100g abóbora', '50g arroz integral'],
      preparo: 'Cozinhe o frango sem tempero. Cozinhe os legumes no vapor. Misture tudo com o arroz cozido.',
      beneficios: 'Rico em proteínas, vitaminas A e C. Ideal para digestão.',
      aprovadoPorVet: true,
      objetivo: 'Saúde geral',
      porte: 'Médio'
    },
    {
      id: 2,
      nome: 'Patê Natural de Atum para Gatos',
      especie: 'Gato',
      ingredientes: ['200g atum em água', '50g abóbora cozida', '1 colher azeite'],
      preparo: 'Misture o atum escorrido com a abóbora amassada. Adicione o azeite.',
      beneficios: 'Ômega-3 para pelagem brilhante. Hidratação extra.',
      aprovadoPorVet: true,
      objetivo: 'Pelagem saudável',
      porte: 'Todos'
    },
    {
      id: 3,
      nome: 'Biscoito Natural de Banana',
      especie: 'Cão',
      ingredientes: ['2 bananas maduras', '200g aveia', '1 ovo', '1 colher mel'],
      preparo: 'Amasse as bananas, misture com aveia, ovo e mel. Faça bolinhas e asse por 20min a 180°C.',
      beneficios: 'Petisco saudável, rico em potássio e fibras.',
      aprovadoPorVet: true,
      objetivo: 'Snack saudável',
      porte: 'Todos'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7E9] to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#B8E4C9]/20 px-4 py-2 rounded-full mb-4">
            <ShoppingBag className="w-5 h-5 text-[#B8E4C9]" />
            <span className="text-sm font-semibold text-gray-700">Alimentação Inteligente</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nutrição Completa para seu Pet
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recomendações personalizadas, receitas aprovadas e comparador de preços
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeTab === 'racoes' ? 'default' : 'outline'}
            onClick={() => setActiveTab('racoes')}
            className={activeTab === 'racoes' ? 'bg-[#A3D8F4] text-white' : ''}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Rações
          </Button>
          <Button
            variant={activeTab === 'natural' ? 'default' : 'outline'}
            onClick={() => setActiveTab('natural')}
            className={activeTab === 'natural' ? 'bg-[#B8E4C9] text-white' : ''}
          >
            <Apple className="w-4 h-4 mr-2" />
            Alimentação Natural
          </Button>
          <Button
            variant={activeTab === 'receitas' ? 'default' : 'outline'}
            onClick={() => setActiveTab('receitas')}
            className={activeTab === 'receitas' ? 'bg-[#D8C7FF] text-white' : ''}
          >
            <ChefHat className="w-4 h-4 mr-2" />
            Receitas
          </Button>
        </div>

        {/* Rações Tab */}
        {activeTab === 'racoes' && (
          <div>
            {/* Filtros */}
            <Card className="p-6 mb-8 rounded-2xl">
              <div className="grid md:grid-cols-4 gap-4">
                <Input placeholder="Buscar ração..." className="rounded-xl" />
                <select className="border rounded-xl px-4 py-2">
                  <option>Todos os portes</option>
                  <option>Pequeno</option>
                  <option>Médio</option>
                  <option>Grande</option>
                </select>
                <select className="border rounded-xl px-4 py-2">
                  <option>Todas as idades</option>
                  <option>Filhote</option>
                  <option>Adulto</option>
                  <option>Sênior</option>
                </select>
                <Button className="bg-[#A3D8F4] text-white rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar
                </Button>
              </div>
            </Card>

            {/* Lista de Rações */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {racoes.map((racao) => (
                <Card key={racao.id} className="p-6 rounded-2xl hover:shadow-xl transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{racao.nome}</h3>
                      <p className="text-sm text-gray-600">{racao.tipo}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#F7D9D9]/20 px-2 py-1 rounded-full">
                      <span className="text-sm font-bold text-gray-900">{racao.rating}</span>
                      <span className="text-[#F7D9D9]">★</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Porte:</span> {racao.porte}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Idade:</span> {racao.idade}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {racao.loja} - {racao.cidade}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-2xl font-bold text-[#A3D8F4]">
                        R$ {racao.preco.toFixed(2)}
                      </p>
                    </div>
                    <Button size="sm" className="bg-[#B8E4C9] text-white rounded-xl">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Loja
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Alimentação Natural Tab */}
        {activeTab === 'natural' && (
          <div>
            <Card className="p-8 rounded-2xl mb-8 bg-gradient-to-br from-[#B8E4C9]/10 to-white">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Guia de Alimentação Natural
              </h2>
              <p className="text-gray-600 mb-6">
                Alimentos seguros e nutritivos para seu pet. Sempre consulte um veterinário antes de mudanças na dieta.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {alimentosNaturais.map((grupo, index) => (
                  <Card key={index} className={`p-6 rounded-2xl ${grupo.cor}/10 border-2 border-${grupo.cor}`}>
                    <h3 className="font-bold text-lg text-gray-900 mb-4">{grupo.categoria}</h3>
                    <ul className="space-y-2">
                      {grupo.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          {grupo.categoria === 'PROIBIDOS' ? (
                            <AlertCircle className="w-4 h-4 text-red-500" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-[#B8E4C9]"></div>
                          )}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="p-8 rounded-2xl bg-[#A3D8F4]/5">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quantidade Diária Recomendada
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#A3D8F4] mb-2">2-3%</div>
                  <p className="text-gray-600">do peso corporal para cães adultos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#B8E4C9] mb-2">3-5%</div>
                  <p className="text-gray-600">do peso corporal para filhotes</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D8C7FF] mb-2">2-4%</div>
                  <p className="text-gray-600">do peso corporal para gatos</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Receitas Tab */}
        {activeTab === 'receitas' && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {receitas.map((receita) => (
                <Card key={receita.id} className="p-6 rounded-2xl hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{receita.especie === 'Cão' ? '🐕' : '🐱'}</span>
                    {receita.aprovadoPorVet && (
                      <span className="bg-[#B8E4C9] text-white text-xs px-3 py-1 rounded-full font-bold">
                        ✓ Aprovado por Vet
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{receita.nome}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Ingredientes:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {receita.ingredientes.map((ing, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#A3D8F4]"></div>
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Preparo:</p>
                      <p className="text-sm text-gray-600">{receita.preparo}</p>
                    </div>
                    
                    <div className="bg-[#B8E4C9]/10 p-3 rounded-xl">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Benefícios:</p>
                      <p className="text-sm text-gray-600">{receita.beneficios}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 text-xs">
                    <span className="bg-[#D8C7FF]/20 px-3 py-1 rounded-full text-gray-700">
                      {receita.objetivo}
                    </span>
                    <span className="bg-[#F7D9D9]/20 px-3 py-1 rounded-full text-gray-700">
                      Porte: {receita.porte}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
