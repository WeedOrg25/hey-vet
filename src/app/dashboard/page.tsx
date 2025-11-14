'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Calendar, 
  Stethoscope, 
  ShoppingBag, 
  MessageCircle, 
  Users, 
  Bell, 
  Plus,
  Heart,
  AlertCircle,
  TrendingUp,
  LogOut,
  Settings,
  Crown,
  BookOpen,
  Brain
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [pets, setPets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar autenticação
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/auth/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    // Carregar pets
    const petsData = localStorage.getItem('pets');
    if (petsData) {
      setPets(JSON.parse(petsData));
    }

    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('pets');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF7E9] to-white flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-12 h-12 text-[#A3D8F4] animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  const modules = [
    {
      icon: Calendar,
      title: 'Vacinação',
      description: 'Calendário e alertas',
      color: 'bg-[#A3D8F4]',
      href: '/vaccination',
      badge: '3 pendentes'
    },
    {
      icon: Stethoscope,
      title: 'Saúde',
      description: 'Sintomas e doenças',
      color: 'bg-[#B8E4C9]',
      href: '/health'
    },
    {
      icon: ShoppingBag,
      title: 'Alimentação',
      description: 'Rações e nutrição',
      color: 'bg-[#F7D9D9]',
      href: '/food'
    },
    {
      icon: MessageCircle,
      title: 'Comunicação',
      description: 'Entenda seu pet',
      color: 'bg-[#D8C7FF]',
      href: '/communication',
      premium: true
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Eventos e adoção',
      color: 'bg-[#F7D9D9]',
      href: '/community'
    },
    {
      icon: Brain,
      title: 'Análise com IA',
      description: 'Comportamento e sintomas',
      color: 'bg-[#A3D8F4]',
      href: '/health',
      premium: true
    },
    {
      icon: BookOpen,
      title: 'Tutorial',
      description: 'Guia do usuário',
      color: 'bg-[#D8C7FF]',
      href: '/tutorial'
    },
    {
      icon: TrendingUp,
      title: 'Relatórios',
      description: 'Gráficos e insights',
      color: 'bg-[#B8E4C9]',
      href: '/reports',
      premium: true
    }
  ];

  const isPremium = user?.plan === 'premium' || user?.plan === 'trial';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF7E9] to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/67150f71-479c-4008-bb52-fc1c3b5c79cf.png" 
                alt="Hey, Vet! Logo" 
                className="h-10 w-10 rounded-xl"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Hey, Vet!</h1>
                <p className="text-sm text-gray-600">Olá, {user?.name?.split(' ')[0]}!</p>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              {user?.plan === 'trial' && (
                <div className="hidden sm:flex items-center gap-2 bg-[#D8C7FF]/20 px-3 py-1.5 rounded-full">
                  <Crown className="w-4 h-4 text-[#D8C7FF]" />
                  <span className="text-sm font-medium text-gray-700">Trial ativo</span>
                </div>
              )}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => router.push('/settings')}>
                <Settings className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="w-5 h-5 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Trial Alert */}
        {user?.plan === 'trial' && (
          <Alert className="mb-6 border-2 border-[#D8C7FF] bg-[#D8C7FF]/10">
            <Crown className="h-5 w-5 text-[#D8C7FF]" />
            <AlertDescription className="text-gray-700">
              <strong>Trial Premium ativo!</strong> Você tem acesso completo por 7 dias. Aproveite todos os recursos.
            </AlertDescription>
          </Alert>
        )}

        {/* Pets Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Meus Pets</h2>
            <Link href="/pets/register">
              <Button className="bg-[#A3D8F4] hover:bg-[#8BC5E8] text-gray-900 font-semibold rounded-xl">
                <Plus className="w-5 h-5 mr-2" />
                Adicionar Pet
              </Button>
            </Link>
          </div>

          {pets.length === 0 ? (
            <Card className="p-8 text-center rounded-2xl border-2 border-dashed border-gray-300">
              <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Você ainda não cadastrou nenhum pet</p>
              <Link href="/pets/register">
                <Button className="bg-[#A3D8F4] hover:bg-[#8BC5E8] text-gray-900 font-semibold rounded-xl">
                  Cadastrar meu primeiro pet
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pets.map((pet) => (
                <Card key={pet.id} className="p-6 rounded-2xl border-2 border-gray-100 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#F7D9D9] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-8 h-8 text-gray-900" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 truncate">{pet.name}</h3>
                      <p className="text-sm text-gray-600">{pet.breed}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {Math.floor(pet.age / 12)} anos
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {pet.weight}kg
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Modules Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Módulos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <Link key={index} href={module.premium && !isPremium ? '/upgrade' : module.href}>
                <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group">
                  {module.premium && !isPremium && (
                    <div className="absolute top-3 right-3 bg-[#D8C7FF] text-gray-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      Premium
                    </div>
                  )}
                  
                  <div className={`${module.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <module.icon className="w-7 h-7 text-gray-900" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{module.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                  
                  {module.badge && (
                    <div className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">
                      <AlertCircle className="w-3 h-3" />
                      {module.badge}
                    </div>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        {pets.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 rounded-2xl border-2 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#A3D8F4]/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#A3D8F4]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="text-sm text-gray-600">Vacinas pendentes</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#B8E4C9]/20 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-[#B8E4C9]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                  <p className="text-sm text-gray-600">Alertas de saúde</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F7D9D9]/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#F7D9D9]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{pets.length}</p>
                  <p className="text-sm text-gray-600">Pets cadastrados</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
