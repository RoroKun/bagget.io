"use client"

import { BetterButton } from "@/components/ui/button";
import Image from "next/image";
import { Redirect } from "@/components/utility/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { Text } from "@/components/utility/typography";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider, 
    SidebarTrigger
  } from "@/components/ui/sidebar"


export default function NavBar() {
    const isMobile = useIsMobile()
  
    return(
      <header className="fixed z-50 mt-3 left-1/2 -translate-x-1/2 text-gray-50">
        <nav className="bg-gradient-to-br from-green-950 to-green-900 shadow-lg flex justify-center items-center py-2 px-10 rounded-4xl gap-8">
          <Redirect redirect={"/"}>
            <div className="w-8 h-8">
              <Image 
                src='/favicon-mono.svg' 
                alt='Bag/Get' 
                width={1000}
                height={1000}
                className="w-full"
              />
            </div>
          </Redirect>
          {isMobile ? 
            <SidebarProvider>
                <NavSidebar />
                <SidebarTrigger />
            </SidebarProvider>
            :
            <NavLinks />
          }
        </nav>
      </header>
    )
}

function NavLinks() {
    return(
        <>
            <Redirect redirect={"/the-challenge"}>
                <Text size="small">The Challenge</Text>
            </Redirect>
            <Redirect redirect={"/our-story"}>
                <Text size="small">Our Story</Text>
            </Redirect>
            <Redirect redirect={"/news"}>
                <Text size="small">News</Text>
            </Redirect>
            <BetterButton link="/contact" variant="secondary"><Text>Contact</Text></BetterButton>
        </>
    )
}

function NavSidebar() {
    return (
      <Sidebar side="right">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                  <SidebarMenuItem >
                    <SidebarMenuButton asChild>
                        <Redirect redirect={"/the-challenge"}>
                            <Text size="small">The Challenge</Text>
                        </Redirect>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem >
                    <SidebarMenuButton asChild>
                        <Redirect redirect={"/our-story"}>
                            <Text size="small">Our Story</Text>
                        </Redirect>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem >
                    <SidebarMenuButton asChild>
                        <Redirect redirect={"/news"}>
                            <Text size="small">News</Text>
                        </Redirect>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem >
                    <SidebarMenuButton asChild>
                        <BetterButton link="/contact" variant="secondary"><Text>Contact</Text></BetterButton>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }