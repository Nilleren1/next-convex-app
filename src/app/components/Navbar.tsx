"use client"

import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/app/components/menubar"
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
  return (
    <div>
      <Menubar className='p-7'>
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Blog</MenubarTrigger>
          <MenubarContent>

          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
          </MenubarContent>
        </MenubarMenu>
        <div style={{ marginLeft: "auto", display: "flex", gap: "15px" }}>
          <MenubarMenu>
            <MenubarTrigger>Account</MenubarTrigger>
            <MenubarContent>
              <MenubarItem inset>Login</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Create User</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <ModeToggle />
        </div>
      </Menubar>
    </div>
  )
}
