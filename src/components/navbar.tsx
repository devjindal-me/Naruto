'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Atom, BookUser, Bot, Heart, Swords, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Biography', icon: BookUser },
  { href: '/techniques', label: 'Techniques', icon: Swords },
  { href: '/relationships', label: 'Relationships', icon: Heart },
  { href: '/plot-twists', label: 'Plot Twists', icon: Zap },
  { href: '/chatbot', label: 'Chatbot', icon: Bot },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Atom className="h-6 w-6 text-primary" />
            <span className="font-bold">Naruto Info Hub</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                'transition-colors hover:text-primary flex items-center gap-2',
                pathname === href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
