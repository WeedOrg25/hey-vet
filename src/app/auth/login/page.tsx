'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de login (substituir por API real)
    setTimeout(() => {
      // Salvar sessão no localStorage (temporário)
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        name: 'Tutor Demo',
        email: email,
        plan: 'premium'
      }));
      
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A3D8F4]/20 via-[#FFF7E9] to-[#F7D9D9]/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 rounded-2xl shadow-xl border-2 border-gray-100">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/67150f71-479c-4008-bb52-fc1c3b5c79cf.png" 
              alt="Hey, Vet! Logo" 
              className="h-16 w-16 rounded-2xl"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bem-vindo de volta!
          </h1>
          <p className="text-gray-600">Entre para cuidar dos seus pets</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              E-mail
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 py-6 rounded-xl border-2 border-gray-200 focus:border-[#A3D8F4]"
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
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 py-6 rounded-xl border-2 border-gray-200 focus:border-[#A3D8F4]"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <span className="text-gray-600">Lembrar de mim</span>
            </label>
            <Link href="/auth/forgot-password" className="text-[#A3D8F4] hover:underline font-medium">
              Esqueci a senha
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#A3D8F4] hover:bg-[#8BC5E8] text-gray-900 font-semibold py-6 rounded-xl shadow-lg transition-all"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Ainda não tem conta?{' '}
            <Link href="/auth/register" className="text-[#A3D8F4] hover:underline font-semibold">
              Cadastre-se grátis
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
