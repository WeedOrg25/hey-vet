'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dog, Cat, ArrowRight, Upload, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { PetType, PetSize, PetSex } from '@/lib/types';

export default function RegisterPetPage() {
  const router = useRouter();
  const [petData, setPetData] = useState({
    name: '',
    type: 'dog' as PetType,
    breed: '',
    age: '',
    size: 'medium' as PetSize,
    weight: '',
    sex: 'male' as PetSex,
    allergies: '',
    medicalHistory: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de cadastro de pet (substituir por API real)
    setTimeout(() => {
      // Salvar pet no localStorage (temporário)
      const pets = JSON.parse(localStorage.getItem('pets') || '[]');
      pets.push({
        id: Date.now().toString(),
        ...petData,
        age: parseInt(petData.age),
        weight: parseFloat(petData.weight),
        allergies: petData.allergies.split(',').map(a => a.trim()).filter(Boolean),
        createdAt: new Date()
      });
      localStorage.setItem('pets', JSON.stringify(pets));
      
      router.push('/dashboard');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setPetData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7D9D9]/20 via-[#FFF7E9] to-[#D8C7FF]/20 flex items-center justify-center p-4 py-12">
      <Card className="w-full max-w-3xl p-8 rounded-2xl shadow-xl border-2 border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F7D9D9] rounded-2xl mb-4">
            <Heart className="w-8 h-8 text-gray-900" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Cadastre seu pet
          </h1>
          <p className="text-gray-600">Vamos conhecer seu melhor amigo 🐾</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tipo de Pet */}
          <div className="space-y-2">
            <Label className="text-gray-700 font-medium">Tipo de pet</Label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPetData(prev => ({ ...prev, type: 'dog' }))}
                className={`p-6 rounded-xl border-2 transition-all ${
                  petData.type === 'dog'
                    ? 'border-[#A3D8F4] bg-[#A3D8F4]/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Dog className="w-12 h-12 mx-auto mb-2 text-gray-700" />
                <p className="font-semibold text-gray-900">Cachorro</p>
              </button>
              <button
                type="button"
                onClick={() => setPetData(prev => ({ ...prev, type: 'cat' }))}
                className={`p-6 rounded-xl border-2 transition-all ${
                  petData.type === 'cat'
                    ? 'border-[#A3D8F4] bg-[#A3D8F4]/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Cat className="w-12 h-12 mx-auto mb-2 text-gray-700" />
                <p className="font-semibold text-gray-900">Gato</p>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                Nome do pet *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Rex, Luna, Bob..."
                value={petData.name}
                onChange={handleChange}
                className="py-6 rounded-xl border-2 border-gray-200 focus:border-[#F7D9D9]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="breed" className="text-gray-700 font-medium">
                Raça *
              </Label>
              <Input
                id="breed"
                name="breed"
                type="text"
                placeholder="Labrador, Persa, SRD..."
                value={petData.breed}
                onChange={handleChange}
                className="py-6 rounded-xl border-2 border-gray-200 focus:border-[#F7D9D9]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age" className="text-gray-700 font-medium">
                Idade (em meses) *
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                placeholder="24"
                value={petData.age}
                onChange={handleChange}
                className="py-6 rounded-xl border-2 border-gray-200 focus:border-[#F7D9D9]"
                required
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight" className="text-gray-700 font-medium">
                Peso (kg) *
              </Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                step="0.1"
                placeholder="15.5"
                value={petData.weight}
                onChange={handleChange}
                className="py-6 rounded-xl border-2 border-gray-200 focus:border-[#F7D9D9]"
                required
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="size" className="text-gray-700 font-medium">
                Porte *
              </Label>
              <select
                id="size"
                name="size"
                value={petData.size}
                onChange={handleChange}
                className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#F7D9D9] focus:outline-none"
                required
              >
                <option value="small">Pequeno (até 10kg)</option>
                <option value="medium">Médio (10-25kg)</option>
                <option value="large">Grande (25-45kg)</option>
                <option value="giant">Gigante (acima de 45kg)</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sex" className="text-gray-700 font-medium">
                Sexo *
              </Label>
              <select
                id="sex"
                name="sex"
                value={petData.sex}
                onChange={handleChange}
                className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#F7D9D9] focus:outline-none"
                required
              >
                <option value="male">Macho</option>
                <option value="female">Fêmea</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="allergies" className="text-gray-700 font-medium">
              Alergias (separadas por vírgula)
            </Label>
            <Input
              id="allergies"
              name="allergies"
              type="text"
              placeholder="Frango, milho, soja..."
              value={petData.allergies}
              onChange={handleChange}
              className="py-6 rounded-xl border-2 border-gray-200 focus:border-[#F7D9D9]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicalHistory" className="text-gray-700 font-medium">
              Histórico médico
            </Label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              placeholder="Cirurgias, doenças prévias, medicamentos em uso..."
              value={petData.medicalHistory}
              onChange={handleChange}
              className="w-full min-h-[100px] py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#F7D9D9] focus:outline-none resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-700 font-medium">Foto do pet (opcional)</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#F7D9D9] transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600">Clique para fazer upload ou arraste a foto</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG até 5MB</p>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#F7D9D9] hover:bg-[#F0C5C5] text-gray-900 font-semibold py-6 rounded-xl shadow-lg transition-all"
          >
            {isLoading ? 'Cadastrando...' : 'Cadastrar pet e ir para o dashboard'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Você poderá adicionar mais pets depois no dashboard
          </p>
        </div>
      </Card>
    </div>
  );
}
