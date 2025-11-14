'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Clock, 
  DollarSign, 
  Star,
  ArrowLeft,
  Shield,
  AlertCircle,
  CheckCircle,
  Search,
  Filter,
  Heart,
  Navigation
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { DOG_VACCINES, CAT_VACCINES, MOCK_VACCINATION_LOCATIONS } from '@/lib/constants';
import { Vaccine, VaccinationLocation } from '@/lib/types';

export default function VaccinationPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [pets, setPets] = useState<any[]>([]);
  const [selectedPet, setSelectedPet] = useState<any>(null);
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);
  const [locations, setLocations] = useState<VaccinationLocation[]>(MOCK_VACCINATION_LOCATIONS);
  const [selectedVaccine, setSelectedVaccine] = useState<Vaccine | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'required' | 'optional'>('all');
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
      const parsedPets = JSON.parse(petsData);
      setPets(parsedPets);
      if (parsedPets.length > 0) {
        setSelectedPet(parsedPets[0]);
        loadVaccinesForPet(parsedPets[0]);
      }
    }

    setIsLoading(false);
  }, [router]);

  const loadVaccinesForPet = (pet: any) => {
    if (pet.type === 'dog') {
      setVaccines(DOG_VACCINES);
    } else {
      setVaccines(CAT_VACCINES);
    }
  };

  const handlePetChange = (pet: any) => {
    setSelectedPet(pet);
    loadVaccinesForPet(pet);
    setSelectedVaccine(null);
  };

  const filteredVaccines = vaccines.filter(vaccine => {
    const matchesSearch = vaccine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vaccine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' ||
                         (filterType === 'required' && vaccine.isRequired) ||
                         (filterType === 'optional' && !vaccine.isRequired);
    return matchesSearch && matchesFilter;
  });

  const filteredLocations = selectedVaccine
    ? locations.filter(loc => loc.availableVaccines.includes(selectedVaccine.id))
    : locations;

  const isPremium = user?.plan === 'premium' || user?.plan === 'trial';

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

  if (pets.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF7E9] to-white p-4">
        <div className="container mx-auto max-w-2xl py-12">
          <Card className="p-8 text-center rounded-2xl">
            <Shield className="w-16 h-16 text-[#A3D8F4] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Nenhum pet cadastrado</h2>
            <p className="text-gray-600 mb-6">Cadastre seu primeiro pet para acessar o módulo de vacinação</p>
            <Link href="/pets/register">
              <Button className="bg-[#A3D8F4] hover:bg-[#8BC5E8] text-gray-900 font-semibold rounded-xl">
                Cadastrar Pet
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF7E9] to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="w-10 h-10 bg-[#A3D8F4] rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Vacinação</h1>
                <p className="text-sm text-gray-600">Calendário e locais</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Pet Selector */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2 block">Selecione o pet:</label>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {pets.map((pet) => (
              <button
                key={pet.id}
                onClick={() => handlePetChange(pet)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all whitespace-nowrap ${
                  selectedPet?.id === pet.id
                    ? 'border-[#A3D8F4] bg-[#A3D8F4]/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="w-10 h-10 bg-[#F7D9D9] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-gray-900" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{pet.name}</p>
                  <p className="text-xs text-gray-600">{pet.breed}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Premium Alert */}
        {!isPremium && (
          <Alert className="mb-6 border-2 border-[#D8C7FF] bg-[#D8C7FF]/10">
            <AlertCircle className="h-5 w-5 text-[#D8C7FF]" />
            <AlertDescription className="text-gray-700">
              <strong>Upgrade para Premium</strong> para acessar busca de clínicas, comparador de preços e alertas automáticos.
              <Link href="/upgrade">
                <Button size="sm" className="ml-4 bg-[#D8C7FF] hover:bg-[#C5B3F0] text-gray-900">
                  Ver Planos
                </Button>
              </Link>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vaccines List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Vacinas para {selectedPet?.type === 'dog' ? 'Cães' : 'Gatos'}
              </h2>
            </div>

            {/* Search and Filter */}
            <div className="mb-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar vacina..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-6 rounded-xl border-2 border-gray-200"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant={filterType === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterType('all')}
                  className={filterType === 'all' ? 'bg-[#A3D8F4] text-gray-900' : ''}
                  size="sm"
                >
                  Todas
                </Button>
                <Button
                  variant={filterType === 'required' ? 'default' : 'outline'}
                  onClick={() => setFilterType('required')}
                  className={filterType === 'required' ? 'bg-[#A3D8F4] text-gray-900' : ''}
                  size="sm"
                >
                  Obrigatórias
                </Button>
                <Button
                  variant={filterType === 'optional' ? 'default' : 'outline'}
                  onClick={() => setFilterType('optional')}
                  className={filterType === 'optional' ? 'bg-[#A3D8F4] text-gray-900' : ''}
                  size="sm"
                >
                  Opcionais
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredVaccines.map((vaccine) => (
                <Card
                  key={vaccine.id}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedVaccine?.id === vaccine.id
                      ? 'border-[#A3D8F4] bg-[#A3D8F4]/5'
                      : 'border-gray-100 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedVaccine(vaccine)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{vaccine.name}</h3>
                        {vaccine.isRequired ? (
                          <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                            Obrigatória
                          </span>
                        ) : (
                          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                            Opcional
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{vaccine.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-[#A3D8F4] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Idade recomendada:</p>
                        <p className="text-gray-600">{vaccine.ageRecommendation}</p>
                      </div>
                    </div>

                    {vaccine.boosterSchedule && (
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-[#B8E4C9] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Reforço:</p>
                          <p className="text-gray-600">{vaccine.boosterSchedule}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-[#F7D9D9] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Protege contra:</p>
                        <p className="text-gray-600">{vaccine.protectsAgainst.join(', ')}</p>
                      </div>
                    </div>
                  </div>

                  {selectedVaccine?.id === vaccine.id && isPremium && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Button
                        className="w-full bg-[#A3D8F4] hover:bg-[#8BC5E8] text-gray-900 font-semibold rounded-xl"
                        onClick={() => {
                          // Scroll to locations
                          document.getElementById('locations-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Ver locais disponíveis
                        <MapPin className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Locations List */}
          <div id="locations-section">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedVaccine ? `Locais com ${selectedVaccine.name}` : 'Clínicas e Petshops'}
              </h2>

              {!isPremium ? (
                <Card className="p-8 text-center rounded-2xl border-2 border-dashed border-gray-300">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Recurso Premium</h3>
                  <p className="text-gray-600 mb-4">
                    Upgrade para ver clínicas próximas, comparar preços e agendar vacinas
                  </p>
                  <Link href="/upgrade">
                    <Button className="bg-[#D8C7FF] hover:bg-[#C5B3F0] text-gray-900 font-semibold rounded-xl">
                      Fazer Upgrade
                    </Button>
                  </Link>
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredLocations.length === 0 ? (
                    <Card className="p-6 text-center rounded-2xl border-2 border-gray-200">
                      <AlertCircle className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600">
                        Nenhum local encontrado com esta vacina em {user?.city}
                      </p>
                    </Card>
                  ) : (
                    filteredLocations.map((location) => (
                      <Card key={location.id} className="p-6 rounded-2xl border-2 border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{location.name}</h3>
                            <div className="flex items-center gap-1 mb-2">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-semibold text-gray-900">{location.rating}</span>
                              <span className="text-sm text-gray-500">• {location.type === 'clinic' ? 'Clínica' : location.type === 'hospital' ? 'Hospital' : 'Petshop'}</span>
                            </div>
                          </div>
                          {location.distance && (
                            <div className="text-right">
                              <p className="text-sm font-semibold text-[#A3D8F4]">{location.distance} km</p>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2 text-sm mb-4">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-600">{location.address}, {location.city} - {location.state}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            <p className="text-gray-600">{location.phone}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            <p className="text-gray-600">{location.hours}</p>
                          </div>
                        </div>

                        {selectedVaccine && location.prices[selectedVaccine.id] && (
                          <div className="bg-[#B8E4C9]/20 p-4 rounded-xl mb-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-[#B8E4C9]" />
                                <span className="font-medium text-gray-900">Preço:</span>
                              </div>
                              <span className="text-2xl font-bold text-gray-900">
                                R$ {location.prices[selectedVaccine.id].toFixed(2)}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="flex-1 border-2 border-[#A3D8F4] text-gray-900 rounded-xl"
                          >
                            <Navigation className="w-4 h-4 mr-2" />
                            Rotas
                          </Button>
                          <Button className="flex-1 bg-[#A3D8F4] hover:bg-[#8BC5E8] text-gray-900 font-semibold rounded-xl">
                            <Phone className="w-4 h-4 mr-2" />
                            Ligar
                          </Button>
                        </div>
                      </Card>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
