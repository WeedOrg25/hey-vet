'use client';

import { useState } from 'react';
import { Stethoscope, Search, AlertTriangle, Brain, Video, Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/custom/navbar';

export default function HealthPage() {
  const [activeTab, setActiveTab] = useState<'doencas' | 'analise' | 'veterinario'>('doencas');
  const [searchTerm, setSearchTerm] = useState('');

  const doencas = [
    {
      id: 1,
      nome: 'Cinomose',
      categoria: 'Tradicional',
      especie: 'Cão',
      gravidade: 'Crítica',
      sintomas: ['Febre alta', 'Secreção nasal e ocular', 'Tosse', 'Vômitos e diarreia', 'Convulsões'],
      causas: ['Vírus da cinomose', 'Contato com cães infectados'],
      tratamento: 'Tratamento de suporte, soro, antibióticos, internação em casos graves',
      prevencao: 'Vacinação V8/V10 em dia',
      cor: 'bg-red-500'
    },
    {
      id: 2,
      nome: 'Ansiedade e Estresse Crônico',
      categoria: 'Moderna',
      especie: 'Cão/Gato',
      gravidade: 'Média',
      sintomas: ['Lambedura excessiva', 'Destruição de objetos', 'Latidos/miados excessivos', 'Perda de apetite', 'Isolamento social'],
      causas: ['Solidão prolongada', 'Falta de enriquecimento ambiental', 'Mudanças bruscas', 'Ambiente urbano estressante'],
      tratamento: 'Terapia comportamental, enriquecimento ambiental, ansiolíticos naturais, medicação em casos graves',
      prevencao: 'Rotina estruturada, exercícios físicos diários, socialização adequada',
      cor: 'bg-orange-500'
    },
    {
      id: 3,
      nome: 'Alopecia por Estresse',
      categoria: 'Moderna',
      especie: 'Cão/Gato',
      gravidade: 'Média',
      sintomas: ['Áreas sem pelo (simétricas)', 'Lambedura excessiva', 'Pele avermelhada', 'Comportamento ansioso'],
      causas: ['Estresse crônico', 'Ansiedade de separação', 'Tédio', 'Conflitos com outros pets'],
      tratamento: 'Terapia comportamental, redução de estressores, suplementos calmantes, tratamento tópico',
      prevencao: 'Ambiente enriquecido, rotina estável, atenção adequada',
      cor: 'bg-yellow-500'
    },
    {
      id: 4,
      nome: 'Depressão em Pets',
      categoria: 'Moderna',
      especie: 'Cão/Gato',
      gravidade: 'Alta',
      sintomas: ['Apatia', 'Perda de apetite', 'Sono excessivo', 'Evitar interação social', 'Olhar triste/vazio'],
      causas: ['Perda de companheiro', 'Mudanças drásticas', 'Falta de estímulos', 'Doenças crônicas não diagnosticadas'],
      tratamento: 'Avaliação veterinária completa, terapia comportamental, medicação antidepressiva em casos graves',
      prevencao: 'Socialização contínua, rotina de exercícios, atenção e carinho diários',
      cor: 'bg-purple-500'
    },
    {
      id: 5,
      nome: 'Parvovirose',
      categoria: 'Tradicional',
      especie: 'Cão',
      gravidade: 'Crítica',
      sintomas: ['Diarreia com sangue', 'Vômitos intensos', 'Febre alta', 'Desidratação severa', 'Letargia'],
      causas: ['Vírus da parvovirose', 'Contato com fezes infectadas'],
      tratamento: 'Internação urgente, soro intravenoso, antibióticos, suporte intensivo',
      prevencao: 'Vacinação V8/V10 em dia, higiene rigorosa',
      cor: 'bg-red-600'
    }
  ];

  const filteredDoencas = doencas.filter(d => 
    d.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.sintomas.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7E9] to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#B8E4C9]/20 px-4 py-2 rounded-full mb-4">
            <Stethoscope className="w-5 h-5 text-[#B8E4C9]" />
            <span className="text-sm font-semibold text-gray-700">Saúde e Diagnóstico</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Biblioteca de Doenças e Sintomas
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Identifique sintomas, entenda doenças e conecte-se com veterinários
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeTab === 'doencas' ? 'default' : 'outline'}
            onClick={() => setActiveTab('doencas')}
            className={activeTab === 'doencas' ? 'bg-[#B8E4C9] text-white' : ''}
          >
            <Stethoscope className="w-4 h-4 mr-2" />
            Biblioteca de Doenças
          </Button>
          <Button
            variant={activeTab === 'analise' ? 'default' : 'outline'}
            onClick={() => setActiveTab('analise')}
            className={activeTab === 'analise' ? 'bg-[#A3D8F4] text-white' : ''}
          >
            <Brain className="w-4 h-4 mr-2" />
            Análise com IA
          </Button>
          <Button
            variant={activeTab === 'veterinario' ? 'default' : 'outline'}
            onClick={() => setActiveTab('veterinario')}
            className={activeTab === 'veterinario' ? 'bg-[#D8C7FF] text-white' : ''}
          >
            <Send className="w-4 h-4 mr-2" />
            Enviar ao Veterinário
          </Button>
        </div>

        {/* Biblioteca de Doenças */}
        {activeTab === 'doencas' && (
          <div>
            {/* Busca */}
            <Card className="p-6 mb-8 rounded-2xl">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input 
                    placeholder="Buscar por doença ou sintoma..." 
                    className="pl-10 rounded-xl"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select className="border rounded-xl px-4 py-2">
                  <option>Todas as categorias</option>
                  <option>Tradicionais</option>
                  <option>Modernas</option>
                </select>
              </div>
            </Card>

            {/* Lista de Doenças */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredDoencas.map((doenca) => (
                <Card key={doenca.id} className="p-6 rounded-2xl hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">{doenca.nome}</h3>
                      <div className="flex gap-2">
                        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                          {doenca.categoria}
                        </span>
                        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                          {doenca.especie}
                        </span>
                      </div>
                    </div>
                    <div className={`${doenca.cor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                      {doenca.gravidade}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        Sintomas:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {doenca.sintomas.map((sintoma, i) => (
                          <span key={i} className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
                            {sintoma}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="font-semibold text-gray-900 mb-2">Causas:</p>
                      <ul className="space-y-1">
                        {doenca.causas.map((causa, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#A3D8F4] mt-1.5"></div>
                            {causa}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#B8E4C9]/10 p-4 rounded-xl">
                      <p className="font-semibold text-gray-900 mb-2">Tratamento:</p>
                      <p className="text-sm text-gray-600">{doenca.tratamento}</p>
                    </div>

                    <div className="bg-[#D8C7FF]/10 p-4 rounded-xl">
                      <p className="font-semibold text-gray-900 mb-2">Prevenção:</p>
                      <p className="text-sm text-gray-600">{doenca.prevencao}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Análise com IA */}
        {activeTab === 'analise' && (
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-[#A3D8F4]/10 to-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#A3D8F4]/20 rounded-full mb-4">
                  <Brain className="w-10 h-10 text-[#A3D8F4]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Análise de Sintomas com IA
                </h2>
                <p className="text-gray-600">
                  Grave um vídeo do seu pet e receba uma análise preliminar dos sintomas
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-300 mb-6">
                <div className="text-center">
                  <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    Grave ou selecione um vídeo do seu pet
                  </p>
                  <Button className="bg-[#A3D8F4] text-white rounded-xl">
                    <Upload className="w-4 h-4 mr-2" />
                    Selecionar Vídeo
                  </Button>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-2xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900 mb-2">Importante:</p>
                    <p className="text-sm text-red-700">
                      Esta análise é apenas preliminar e não substitui consulta veterinária. 
                      Em caso de sintomas graves, procure um veterinário imediatamente.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-[#A3D8F4] to-[#D8C7FF] text-white py-6 rounded-xl font-bold">
                <Brain className="w-5 h-5 mr-2" />
                Analisar Sintomas
              </Button>
            </Card>

            {/* Exemplo de Resultado */}
            <Card className="p-8 rounded-2xl mt-8 bg-gradient-to-br from-[#F7D9D9]/10 to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Exemplo de Análise
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border-l-4 border-orange-500">
                  <p className="font-semibold text-gray-900 mb-2">Sintomas Detectados:</p>
                  <p className="text-gray-600">Tosse persistente, respiração ofegante</p>
                </div>
                <div className="bg-white p-4 rounded-xl border-l-4 border-red-500">
                  <p className="font-semibold text-gray-900 mb-2">Nível de Urgência:</p>
                  <p className="text-red-600 font-bold">MÉDIO - Consulte veterinário em 24-48h</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">Possíveis Causas:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Tosse dos canis (traqueobronquite)</li>
                    <li>• Problema respiratório</li>
                    <li>• Reação alérgica</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">Recomendações Imediatas:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Mantenha o pet em ambiente calmo</li>
                    <li>• Evite exercícios intensos</li>
                    <li>• Agende consulta veterinária</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Enviar ao Veterinário */}
        {activeTab === 'veterinario' && (
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-[#D8C7FF]/10 to-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D8C7FF]/20 rounded-full mb-4">
                  <Send className="w-10 h-10 text-[#D8C7FF]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Enviar Vídeo ao Veterinário
                </h2>
                <p className="text-gray-600">
                  Compartilhe vídeos e receba avaliação profissional
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Selecione seu Veterinário
                  </label>
                  <select className="w-full border rounded-xl px-4 py-3">
                    <option>Dr. Carlos Mendes - Clínica PetCare</option>
                    <option>Dra. Ana Silva - Hospital Veterinário 24h</option>
                    <option>Dr. João Santos - Clínica Animal Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Vídeo do Pet
                  </label>
                  <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <Video className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-3">Arraste ou selecione um vídeo</p>
                      <Button className="bg-[#D8C7FF] text-white rounded-xl">
                        <Upload className="w-4 h-4 mr-2" />
                        Selecionar Vídeo
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Descreva os Sintomas
                  </label>
                  <textarea 
                    className="w-full border rounded-xl px-4 py-3 min-h-[120px]"
                    placeholder="Descreva o que você observou no comportamento do seu pet..."
                  ></textarea>
                </div>

                <div className="bg-[#B8E4C9]/10 p-6 rounded-2xl">
                  <p className="font-semibold text-gray-900 mb-2">O que incluir na descrição:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Quando os sintomas começaram</li>
                    <li>• Frequência e intensidade</li>
                    <li>• Mudanças no comportamento ou apetite</li>
                    <li>• Qualquer outro detalhe relevante</li>
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#D8C7FF] to-[#A3D8F4] text-white py-6 rounded-xl font-bold">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar ao Veterinário
                </Button>
              </div>
            </Card>

            {/* Histórico de Envios */}
            <Card className="p-8 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Histórico de Consultas</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-900">Dr. Carlos Mendes</p>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Respondido
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Enviado em: 15/01/2024</p>
                  <p className="text-sm text-gray-700">
                    <strong>Resposta:</strong> Os sintomas indicam possível alergia alimentar. 
                    Recomendo agendar consulta para exames complementares.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-900">Dra. Ana Silva</p>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      Aguardando
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Enviado em: 18/01/2024</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
