'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    state: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de cadastro (substituir por API real)
    setTimeout(() => {
      // Salvar sessão no localStorage (temporário)
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        name: formData.name,
        email: formData.email,
        city: formData.city,
        plan: 'trial', // 7 dias grátis
        trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }));
      
      router.push('/pets/register');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8E4C9]/20 via-[#FFF7E9] to-[#D8C7FF]/20 flex items-center justify-center p-4 py-12">
      <Card className="w-full max-w-2xl p-8 rounded-2xl shadow-xl border-2 border-gray-100">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/67150f71-479c-4008-bb52-fc1c3b5c79cf.png" 
              alt="Hey, Vet! Logo" 
              className="h-16 w-16 rounded-2xl"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Crie sua conta
          </h1>
          <p className="text-gray-600">Comece a cuidar melhor dos seus pets hoje</p>
          <div className="inline-flex items-center gap-2 bg-[#B8E4C9]/20 px-4 py-2 rounded-full mt-4">
            <span className="text-sm font-semibold text-gray-700">🎉 7 dias grátis de Premium</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                Nome completo
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 py-6 rounded-xl border-2 border-gray-200 focus:border-[#B8E4C9]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                E-mail
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 py-6 rounded-xl border-2 border-gray-200 focus:border-[#B8E4C9]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                Telefone
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 py-6 rounded-xl border-2 border-gray-200 focus:border-[#B8E4C9]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 py-6 rounded-xl border-2 border-gray-200 focus:border-[#B8E4C9]"
                  required
                  minLength={6}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="text-gray-700 font-medium">
                Cidade
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="São Paulo"
                  value={formData.city}
                  onChange={handleChange}
                  className="pl-10 py-6 rounded-xl border-2 border-gray-200 focus:border-[#B8E4C9]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="state" className="text-gray-700 font-medium">
                Estado
              </Label>
              <Input
                id="state"
                name="state"
                type="text"
                placeholder="SP"
                value={formData.state}
                onChange={handleChange}
                className="py-6 rounded-xl border-2 border-gray-200 focus:border-[#B8E4C9]"
                required
                maxLength={2}
              />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" className="w-4 h-4 mt-1 rounded border-gray-300" required />
            <p className="text-sm text-gray-600">
              Aceito os{' '}
              <Link href="/terms" className="text-[#B8E4C9] hover:underline font-medium">
                Termos de Uso
              </Link>{' '}
              e{' '}
              <Link href="/privacy" className="text-[#B8E4C9] hover:underline font-medium">
                Política de Privacidade
              </Link>
            </p>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#B8E4C9] hover:bg-[#A0D4B5] text-gray-900 font-semibold py-6 rounded-xl shadow-lg transition-all"
          >
            {isLoading ? 'Criando conta...' : 'Criar conta e começar trial'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Já tem uma conta?{' '}
            <Link href="/auth/login" className="text-[#B8E4C9] hover:underline font-semibold">
              Faça login
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href="/">
            <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-900">
              ← Voltar para o início
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
