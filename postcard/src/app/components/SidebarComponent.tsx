"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconBuildingStore,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/button";
import NoWalletConnected from "../components/NoWalletConnected";

type SidebarProps = {
  children: React.ReactNode;
};

export default function SidebarComponent({ children }: SidebarProps) {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Store",
      href: "#",
      icon: (
        <IconBuildingStore className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-screen mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className="active:bg-lime-500 rounded-full"
                />
              ))}
            </div>
          </div>
          <div>
            <Drawer>
              <DrawerTrigger>
                <SidebarLink
                  className="pointer-events-none"
                  link={{
                    label: "Logout",
                    href: "#",
                    icon: (
                      <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                    ),
                  }}
                />
              </DrawerTrigger>
              <DrawerContent style={{ height: "500px" }}>
                <DrawerHeader>
                  <DrawerTitle style={{ textAlign: "center" }}>
                    Do you want to log out?
                  </DrawerTitle>
                  <DrawerDescription style={{ textAlign: "center" }}>
                    <WalletMultiButton
                      style={{
                        color: "#84cc16",
                        backgroundColor: "transparent",
                        marginTop: "20px",
                        border: "5px dashed",
                      }}
                    />
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Jerome Monte",
                href: "/profile",
                icon: (
                  <img
                    src="https://github.com/shadcn.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="bg-white w-screen h-screen px-20 pt-5 pb-20 overflow-y-auto overflow-x-hidden rounded-l-[20px] shadow-lg">
        {children}
      </div>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href=".."
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src="logo-postcard.png" className="w-6" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-lime-500 dark:text-white whitespace-pre"
      >
        Postcard
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href=".."
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src="logo-postcard.png" className="w-6" />
    </Link>
  );
};
