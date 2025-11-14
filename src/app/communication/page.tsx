'use client';

import { useState } from 'react';
import { MessageCircle, Volume2, Brain, Video, Upload, Play, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/custom/navbar';

export default function CommunicationPage() {
  const [activeTab, setActiveTab] = useState<'biblioteca' | 'analise'>('biblioteca');
  const [analyzing, setAnalyzing] = useState(false);

  const dogSounds = [
    {
      id: 1,
      tipo: 'Latido curto e agudo',
      emoji: '🐕',
      emocao: 'Alerta / Atenção',
      significado: 'Seu cão está chamando atenção ou alertando sobre algo novo no ambiente',
      recomendacoes: [
        'Verifique o que chamou atenção dele',
        'Reforce positivamente se for comportamento adequado',
        'Redirecione se for latido excessivo'
      ],
      cor: 'bg-[#A3D8F4]'
    },
    {
      id: 2,
      tipo: 'Rosnado baixo',
      emoji: '🐕',
      emocao: 'Medo / Ameaça',
      significado: 'Seu cão está se sentindo ameaçado ou desconfortável',
      recomendacoes: [
        'NÃO se aproxime bruscamente',
        'Remova a fonte de estresse',
        'Dê espaço ao animal',
        'Consulte comportamentalista se for frequente'
      ],
      cor: 'bg-[#F7D9D9]'
    },
    {
      id: 3,
      tipo: 'Uivo prolongado',
      emoji: '🐕',
      emocao: 'Solidão / Comunicação',
      significado: 'Pode indicar solidão, ansiedade de separação ou comunicação com outros cães',
      recomendacoes: [
        'Avalie se há ansiedade de separação',
        'Aumente tempo de interação',
        'Considere enriquecimento ambiental'
      ],
      cor: 'bg-[#D8C7FF]'
    }
  ];

  const catSounds = [
    {
      id: 4,
      tipo: 'Ronronar',
      emoji: '🐱',
      emocao: 'Contentamento / Relaxamento',
      significado: 'Seu gato está relaxado e feliz',
      recomendacoes: [
        'Continue o carinho se estiver interagindo',
        'É um sinal de vínculo positivo',
        'Aproveite o momento de conexão'
      ],
      cor: 'bg-[#B8E4C9]'
    },
    {
      id: 5,
      tipo: 'Sibilo (Hiss)',
      emoji: '🐱',
      emocao: 'Medo / Defesa',
      significado: 'Seu gato está assustado ou se sentindo ameaçado',
      recomendacoes: [
        'Afaste-se e dê espaço',
        'Não force interação',
        'Identifique e remova a fonte de medo',
        'Deixe o gato se acalmar sozinho'
      ],
      cor: 'bg-[#F7D9D9]'
    },
    {
      id: 6,
      tipo: 'Miado longo e alto',
      emoji: '🐱',
      emocao: 'Demanda / Insistência',
      significado: 'Seu gato quer algo específico (comida, atenção, porta aberta)',
      recomendacoes: [
        'Verifique necessidades básicas (água, comida, caixa de areia)',
        'Avalie se é comportamento manipulativo',
        'Estabeleça limites se for demanda excessiva'
      ],
      cor: 'bg-[#D8C7FF]'
    }
  ];

  const handleAnalyzeVideo = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      alert('Análise concluída! (Funcionalidade em desenvolvimento)');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7E9] to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D8C7FF]/20 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-5 h-5 text-[#D8C7FF]" />
            <span className="text-sm font-semibold text-gray-700">Comunicação Pet</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entenda seu Pet
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Biblioteca de sons interpretados e análise comportamental com IA
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeTab === 'biblioteca' ? 'default' : 'outline'}
            onClick={() => setActiveTab('biblioteca')}
            className={activeTab === 'biblioteca' ? 'bg-[#D8C7FF] text-white' : ''}
          >
            <Volume2 className="w-4 h-4 mr-2" />
            Biblioteca de Sons
          </Button>
          <Button
            variant={activeTab === 'analise' ? 'default' : 'outline'}
            onClick={() => setActiveTab('analise')}
            className={activeTab === 'analise' ? 'bg-[#A3D8F4] text-white' : ''}
          >
            <Brain className="w-4 h-4 mr-2" />
            Análise com IA
          </Button>
        </div>

        {/* Biblioteca de Sons */}
        {activeTab === 'biblioteca' && (
          <div>
            {/* Sons de Cães */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🐕</span>
                Sons de Cães
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dogSounds.map((sound) => (
                  <Card key={sound.id} className="p-6 rounded-2xl hover:shadow-xl transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{sound.emoji}</span>
                      <Button size="sm" className={`${sound.cor} text-white rounded-full`}>
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{sound.tipo}</h3>
                    
                    <div className={`${sound.cor}/20 px-4 py-2 rounded-xl mb-3`}>
                      <p className="text-sm font-semibold text-gray-900">
                        Emoção: {sound.emocao}
                      </p>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{sound.significado}</p>
                    
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        O que fazer:
                      </p>
                      <ul className="space-y-1">
                        {sound.recomendacoes.map((rec, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B8E4C9] mt-1.5"></div>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sons de Gatos */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🐱</span>
                Sons de Gatos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catSounds.map((sound) => (
                  <Card key={sound.id} className="p-6 rounded-2xl hover:shadow-xl transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{sound.emoji}</span>
                      <Button size="sm" className={`${sound.cor} text-white rounded-full`}>
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{sound.tipo}</h3>
                    
                    <div className={`${sound.cor}/20 px-4 py-2 rounded-xl mb-3`}>
                      <p className="text-sm font-semibold text-gray-900">
                        Emoção: {sound.emocao}
                      </p>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{sound.significado}</p>
                    
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        O que fazer:
                      </p>
                      <ul className="space-y-1">
                        {sound.recomendacoes.map((rec, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B8E4C9] mt-1.5"></div>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
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
                  Análise Comportamental com IA
                </h2>
                <p className="text-gray-600">
                  Grave um vídeo do seu pet e receba insights comportamentais detalhados
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-300 mb-6">
                <div className="text-center">
                  <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    Arraste um vídeo ou clique para selecionar
                  </p>
                  <Button className="bg-[#A3D8F4] text-white rounded-xl">
                    <Upload className="w-4 h-4 mr-2" />
                    Selecionar Vídeo
                  </Button>
                </div>
              </div>

              <div className="bg-[#D8C7FF]/10 p-6 rounded-2xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#D8C7FF] mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Dicas para melhor análise:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Grave em boa iluminação</li>
                      <li>• Mantenha o pet no centro do vídeo</li>
                      <li>• Vídeos de 10-30 segundos são ideais</li>
                      <li>• Capture o comportamento que deseja analisar</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-[#A3D8F4] to-[#D8C7FF] text-white py-6 rounded-xl font-bold"
                onClick={handleAnalyzeVideo}
                disabled={analyzing}
              >
                {analyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Analisando...
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5 mr-2" />
                    Analisar com IA
                  </>
                )}
              </Button>
            </Card>

            {/* Exemplo de Resultado */}
            <Card className="p-8 rounded-2xl mt-8 bg-gradient-to-br from-[#B8E4C9]/10 to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Exemplo de Análise
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">Comportamento Detectado:</p>
                  <p className="text-gray-600">Latidos repetitivos com postura alerta</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">Interpretação:</p>
                  <p className="text-gray-600">
                    Seu pet está demonstrando comportamento de alerta territorial. 
                    Isso é normal, mas pode indicar necessidade de socialização adicional.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">Recomendações:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Aumente exercícios físicos diários</li>
                    <li>• Considere treinamento de socialização</li>
                    <li>• Consulte veterinário se persistir</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
