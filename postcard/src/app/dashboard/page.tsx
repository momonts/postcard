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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import NoWalletConnected from "../components/NoWalletConnected";
import SidebarComponent from "../components/SidebarComponent";

export default function DashboardPage() {
  NoWalletConnected("..");
  return (
    <SidebarComponent>
      <div className="flex flex-1">
        <div className="px-2 bg-white dark:bg-neutral-900">
          <Carousel className="w-full max-w-screen max-h-40">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card
                      className="border-2 border-zinc-200 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1662235821763-840b7df13345?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                      }}
                    >
                      <CardContent className="flex items-center justify-center p-6 "></CardContent>
                      <CardFooter className="rounded-lg bg-white/80">
                        <CardTitle>Topic#&nbsp;{index + 1}</CardTitle>
                        <CardDescription className="text-black font-semibold antialias">
                          {" "}
                          &nbsp;|&nbsp;@Stamp{index + 1}
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

          <div className="grid grid-cols-4 gap-8 mt-5">
            <div className="col-span-3 ">
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
                    <CardTitle className="line-clamp-1 mr-10">
                      I Found the #1 Gas Station in America!
                    </CardTitle>
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
                    <IconWriting className="mr-2 h-4 w-4 text-lime-500" />{" "}
                    Comment
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
                    <CardTitle className="line-clamp-1 mr-10">
                      Everyone is too busy thinking about the LCK teams and BLG
                      that they don't realize Top Esports can pull off a 2023 T1
                      run and go up against the whole LCK
                    </CardTitle>
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-start gap-2">
                  <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                    <IconMail className="mr-2 h-4 w-4 text-lime-500" /> Read
                  </Button>
                  <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                    <IconWriting className="mr-2 h-4 w-4 text-lime-500" />{" "}
                    Comment
                  </Button>
                  <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                    <IconShare3 className="mr-2 h-4 w-4 text-lime-500" /> Share
                  </Button>
                </CardFooter>
              </Card>

              {/* post with video */}
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
                    <CardTitle className="line-clamp-1 mr-10">
                      Why are cockroaches so hard to kill?
                    </CardTitle>
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
                    <div>
                      <iframe
                        src="https://www.youtube.com/embed/lkdLg0Nq4SQ"
                        className="w-10/12 aspect-video overflow-hidden"
                      ></iframe>
                    </div>
                  </center>
                </CardContent>
                <CardFooter className="flex justify-start gap-2">
                  <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                    <IconMail className="mr-2 h-4 w-4 text-lime-500" /> Read
                  </Button>
                  <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                    <IconWriting className="mr-2 h-4 w-4 text-lime-500" />{" "}
                    Comment
                  </Button>
                  <Button className="border-2 border-dashed border-lime-500 bg-transparent text-lime-500">
                    <IconShare3 className="mr-2 h-4 w-4 text-lime-500" /> Share
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* side card for stamps that the users might be interested */}
            <div className="sticky h-40 top-5 rounded-lg">
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
    </SidebarComponent>
  );
}
