"use client"

import { useState } from 'react'
import { Menu as BurgerIcon } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/Menubar"
import { ModeToggle } from './ModeToggle'
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { WhiteIcon } from './WhiteIcon';

export default function Navbar() {
  const t = useTranslations('HomePage');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Menubar className="p-7 items-center relative">
      <div className="flex items-center flex-1">
        <WhiteIcon width={50} />
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/">{t('home')}</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="hidden md:flex flex-1">
        {/* ...desktop MenubarMenus... */}
        <MenubarMenu>
          <MenubarTrigger>BLOG</MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset><Link href="/blog">Posts</Link></MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset><Link href="/blog/createPost">Create Post</Link></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger><Link href="/projects">{t('projects')}</Link></MenubarTrigger>
          <MenubarContent></MenubarContent>
        </MenubarMenu>
      </div>
      <div className="ml-auto flex gap-4 items-center">
        <div className="hidden md:flex">
          {/* ...account menu and ModeToggle for desktop... */}
          <MenubarMenu>
            <MenubarTrigger>{t('account.label')}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem inset><Link href="/login">{t('account.login')}</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset><Link href="/createUser">{t('account.createUser')}</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <ModeToggle />
        </div>
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <BurgerIcon size={32} />
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="flex flex-col md:hidden bg-white dark:bg-card p-4 shadow-lg w-full gap-3 border rounded-md items-center absolute top-full left-0 z-50">
          <Link href="/blog">Posts</Link>
          <Link href="/blog/createPost">Create Post</Link>
          <Link href="/projects">{t('projects')}</Link>
          <Link href="/login">{t('account.login')}</Link>
          <Link href="/createUser">{t('account.createUser')}</Link>
          <ModeToggle />
        </div>
      )}
    </Menubar>
  );
}