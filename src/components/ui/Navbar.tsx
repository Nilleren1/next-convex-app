"use client"

import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ModeToggle } from './ModeToggle'
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Menubar className='p-7'>
        <MenubarMenu>
          <MenubarTrigger><Link href="/">{t('home')}</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>BLOG</MenubarTrigger>
          <MenubarContent>

          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger><Link href="/projects">{t('projects')}</Link></MenubarTrigger>
          <MenubarContent>
          </MenubarContent>
        </MenubarMenu>
        <div style={{ marginLeft: "auto", display: "flex", gap: "15px" }}>
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
      </Menubar>
    </div>
  )
}
