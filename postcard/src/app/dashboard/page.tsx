"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconBuildingStore,
  IconMail,
  IconRubberStamp,
  IconSettings,
  IconShare3,
  IconUserBolt,
  IconWriting,
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { url } from "inspector";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DashboardPage() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
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
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
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
                href: "#",
                icon: (
                  <img
                    src="logo-postcard.png"
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
      <Dashboard />
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

const Dashboard = () => {
  return (
    <div className="flex flex-1 overflow-auto">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div>
          <Carousel className="w-full max-w-screen max-h-40">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="border-2 border-lime-500">
                      <CardContent className="flex items-center justify-center p-6"></CardContent>
                      <CardFooter>
                        <CardTitle>Card# &nbsp;{index + 1}</CardTitle>
                        <CardDescription>
                          {" "}
                          &nbsp;@Stampede{index + 1}
                        </CardDescription>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="mx-10" />
            <CarouselNext className="mx-10" />
          </Carousel>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3 mx-20">
            {/* post with image */}
            <Card className="mb-10">
              <CardHeader className="grid grid-cols-10">
                <div className="col-span-1 text-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {" "}
                        <Toggle>
                          <IconRubberStamp className="text-lime-500" />
                        </Toggle>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Stamp it!</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-xs font-semibold anitaliased text-slate-400">
                    99.9k
                  </p>
                </div>
                <div className="col-span-9 text-xl antialias font-black">
                  <CardTitle>I Found the #1 Gas Station in America!</CardTitle>
                  <CardDescription>
                    <div className="grid grid-cols-4 gap-px items-center pt-2 w-1/6">
                      <div className="justify-self-center">
                        <Avatar className="size-5">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="col-span-3 font-semibold">
                        <p>@StampSample</p>
                      </div>
                    </div>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <center>
                  <div className="w-10/12 aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1471782517485-c81d26d8572c?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </center>
              </CardContent>
              <CardFooter className="flex justify-start gap-2">
                <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                  <IconMail className="mr-2 h-4 w-4 text-lime-500" /> Read
                </Button>
                <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                  <IconWriting className="mr-2 h-4 w-4 text-lime-500" /> Comment
                </Button>
                <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                  <IconShare3 className="mr-2 h-4 w-4 text-lime-500" /> Share
                </Button>
              </CardFooter>
            </Card>

            {/* post without image */}
            <Card className="mb-10">
              <CardHeader className="grid grid-cols-10">
                <div className="col-span-1 text-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {" "}
                        <Toggle>
                          <IconRubberStamp className="text-lime-500" />
                        </Toggle>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Stamp it!</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-xs font-semibold anitaliased text-slate-400">
                    99.9k
                  </p>
                </div>
                <div className="col-span-9 text-xl antialias font-black">
                  <CardTitle>I Found the #1 Gas Station in America!</CardTitle>
                  <CardDescription>
                    <div className="grid grid-cols-4 gap-px items-center pt-2 w-1/6">
                      <div className="justify-self-center">
                        <Avatar className="size-5">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="col-span-3 font-semibold">
                        <p>@StampSample</p>
                      </div>
                    </div>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-balance line-clamp-4 mx-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
              </CardContent>
              <CardFooter className="flex justify-start gap-2">
                <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                  <IconMail className="mr-2 h-4 w-4 text-lime-500" /> Read
                </Button>
                <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                  <IconWriting className="mr-2 h-4 w-4 text-lime-500" /> Comment
                </Button>
                <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                  <IconShare3 className="mr-2 h-4 w-4 text-lime-500" /> Share
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* side card for stamps that the users might be interested */}
          <div className="sticky h-40 top-0 rounded-lg">
            <Card>
              {/* stamp 1 */}
              <CardHeader>
                <CardTitle>
                  <p className="antialiased text-sm">
                    STAMPS THAT YOU MIGHT LIKE
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 items-center">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="col-span-4">
                    <p>@StampSample</p>
                    <p className="text-xs font-semibold anitaliased text-slate-400">
                      99.9k Mailers
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* stamp 2 */}
              <CardContent>
                <div className="grid grid-cols-5 items-center">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="col-span-4">
                    <p>@StampSample</p>
                    <p className="text-xs font-semibold anitaliased text-slate-400">
                      99.9k Mailers
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* stamp 3 */}
              <CardContent>
                <div className="grid grid-cols-5 items-center">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="col-span-4">
                    <p>@StampSample</p>
                    <p className="text-xs font-semibold anitaliased text-slate-400">
                      99.9k Mailers
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* stamp 4 */}
              <CardContent>
                <div className="grid grid-cols-5 items-center">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="col-span-4">
                    <p>@StampSample</p>
                    <p className="text-xs font-semibold anitaliased text-slate-400">
                      99.9k Mailers
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* stamp 5 */}
              <CardContent>
                <div className="grid grid-cols-5 items-center">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="col-span-4">
                    <p>@StampSample</p>
                    <p className="text-xs font-semibold anitaliased text-slate-400">
                      99.9k Mailers
                    </p>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <p>Show more...</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
