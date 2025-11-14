'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  showAuthButtons?: boolean;
}

export default function Navbar({ showAuthButtons = true }: NavbarProps) {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/67150f71-479c-4008-bb52-fc1c3b5c79cf.png" 
              alt="Hey, Vet! Logo" 
              className="h-12 w-12 rounded-xl"
            />
            <span className="text-2xl font-bold text-gray-900">
              Hey, <span className="text-[#A3D8F4]">Vet!</span>
            </span>
          </Link>
          
          {showAuthButtons && (
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                  Entrar
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-[#A3D8F4] hover:bg-[#8BC5E8] text-gray-900 font-semibold rounded-xl">
                  Começar Grátis
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
