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
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider, 
    SidebarTrigger,
    useSidebar
  } from "@/components/ui/sidebar"
import { BookOpen, Newspaper, Puzzle } from "lucide-react";


export default function NavBar() {
    const isMobile = useIsMobile()
  
    return(
      <header className="fixed z-50 md:mt-3 md:left-1/2 left-0 md:-translate-x-1/2 text-gray-50">
        <nav className="px-4 py-2 bg-gradient-to-br md:from-green-950 md:to-green-900 from-green-900 to-emerald-900 shadow-lg md:rounded-4xl rounded-br-2xl">
          {isMobile ? 
            <SidebarProvider>
                <NavSidebar />
                <SidebarTrigger className="hover:bg-transparent hover:text-gray-50"/>
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
        <div className="lg:w-[600px] md:w-[525px] flex justify-center items-center md:px-10 gap-8">
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
          <Redirect redirect={"/the-challenge"}>
              <Text size="small" className="text-center">The Challenge</Text>
          </Redirect>
          <Redirect redirect={"/our-story"}>
              <Text size="small" className="text-center">Our Story</Text>
          </Redirect>
          <Redirect redirect={"/news"}>
              <Text size="small" className="text-center">News</Text>
          </Redirect>
          <BetterButton link="/contact" variant="secondary"><Text>Contact</Text></BetterButton>
        </div>
    )
}

function NavSidebar() {
  const { toggleSidebar } = useSidebar()
  
    return (
      <Sidebar className="border-none outline-transparent">
        <SidebarContent className="flex flex-col py-10 h-full border-none outline-transparent bg-gradient-to-tr from-green-900 to-emerald-900 text-gray-50">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col gap-4">
                <SidebarMenuItem onClick={() => toggleSidebar()}>
                    <SidebarMenuButton asChild>
                        <Redirect redirect={"/"}>
                          <div className="flex justify-start items-center gap-2">
                            <div className="w-6 h-6">
                              <Image 
                                src='/favicon-mono.svg' 
                                alt='Bag/Get' 
                                width={1000}
                                height={1000}
                                className="w-full"
                              />
                            </div>
                            <Text size="biggest">Home</Text>
                          </div>
                        </Redirect>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem onClick={() => toggleSidebar()}>
                    <SidebarMenuButton asChild >
                        <Redirect redirect={"/the-challenge"}>
                            <div className="flex justify-start items-center gap-2">
                              <Puzzle size={22} />
                              <Text size="biggest">The Challenge</Text>
                            </div>
                        </Redirect>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem onClick={() => toggleSidebar()}>
                    <SidebarMenuButton asChild>
                        <Redirect redirect={"/our-story"}>
                            <div className="flex justify-start items-center gap-2">
                              <BookOpen size={22}/>
                              <Text size="biggest">Our Story</Text>
                            </div>
                        </Redirect>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem onClick={() => toggleSidebar()}>
                    <SidebarMenuButton asChild>
                        <Redirect redirect={"/news"}>
                            <div className="flex justify-start items-center gap-2">
                              <Newspaper size={22}/>
                              <Text size="biggest">News</Text>
                            </div>
                        </Redirect>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenuItem onClick={() => toggleSidebar()}>
                <SidebarMenuButton asChild>
                    <BetterButton link="/contact" variant="secondary"><Text>Contact</Text></BetterButton>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }