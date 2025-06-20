'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Atom, BookUser, Bot, Heart, Swords, Zap, Menu, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Separator } from './ui/separator';

const navLinks = [
  { href: '/', label: 'Biography', icon: BookUser },
  { href: '/techniques', label: 'Techniques', icon: Swords },
  { href: '/relationships', label: 'Relationships', icon: Heart },
  { href: '/plot-twists', label: 'Plot Twists', icon: Zap },
  { href: '/chatbot', label: 'Chatbot', icon: Bot },
  { href: 'https://naruto.fandom.com/wiki/Narutopedia', label: 'Fandom Wiki', icon: Globe, external: true },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Atom className="h-6 w-6 text-primary" />
          <span className="font-bold">Naruto Info Hub</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label, icon: Icon, external }) => {
            if (external) {
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary flex items-center gap-2 text-muted-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              );
            }
            return (
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
            );
          })}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="flex items-center space-x-2">
                <Atom className="h-6 w-6 text-primary" />
                <span className="font-bold">Naruto Info Hub</span>
              </div>
              <Separator className="my-4" />
              <nav className="flex flex-col gap-1">
                {navLinks.map(({ href, label, icon: Icon, external }) => {
                   if (external) {
                    return (
                      <SheetClose asChild key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium transition-colors hover:text-primary text-muted-foreground"
                        >
                          <Icon className="h-5 w-5" />
                          {label}
                        </a>
                      </SheetClose>
                    );
                  }
                  return (
                  <SheetClose asChild key={label}>
                    <Link
                      href={href}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium transition-colors hover:text-primary',
                        pathname === href
                          ? 'bg-muted text-primary'
                          : 'text-muted-foreground'
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {label}
                    </Link>
                  </SheetClose>
                )})}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
