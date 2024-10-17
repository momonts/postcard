"use client";

import React from "react";
import SidebarComponent from "../components/SidebarComponent";
import NoWalletConnected from "../components/NoWalletConnected";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function App() {
  NoWalletConnected("../../");
  return (
    <SidebarComponent>
      <div className="grid grid-rows-3 w-full h-80 bg-lime-500 rounded-t-[50px] overflow-clip">
        <div className="row-span-2 place-self-center">
          <img src="cardplaceholder.jpg" />
        </div>
        <div className="grid grid-cols-5 bg-white w-full">
          <div className="grid bg-slate-500 rounded-full size-40 ml-10 -mt-14">
            <div className="place-self-center">
              <Avatar className="size-full">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="grid grid-rows-2 col-span-3 py-3">
            <h1 className="tracking-tight font-bold antialias text-4xl">
              Jerome Monte
            </h1>
            <div className="antialias font-mono text-pretty w-96">
              The only place where [something ridiculous, uncommon, or
              oxymoronic] makes sense.
            </div>
          </div>
          <div className="grid grid-rows-2 justify-items-center py-5 mr-10">
            <div className="text-center w-full font-bold antialias tracking-tight text-lg text-black/80">
              STAMPS
              <Separator />
            </div>
            <div className="grid grid-cols-5 gap-3 rounded-full justify-items-center">
              <Avatar>
                <AvatarImage src="https://media.licdn.com/dms/image/v2/C4E0BAQFQLb3NigCYsQ/company-logo_200_200/company-logo_200_200/0/1651774940735?e=2147483647&v=beta&t=c5G5XbuihnPjpdU0mDACoogoix4linpQR6ipXR6mmcc" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://monkedao.io/wp-content/uploads/2023/04/Monke-Icon-GreenIvory.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://assets.coingecko.com/coins/images/17789/large/POLIS.jpg?1696517312" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://pbs.twimg.com/profile_images/1443216875874394124/oduXY60G_400x400.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/107701386?s=200&v=4" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-10 bg-lime-400" />
      <div>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </SidebarComponent>
  );
}

// skeleton for bento grid
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-lime-400 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2 outline outline-1 outline-lime-400 ",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1 outline outline-1 outline-lime-400",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1 outline outline-1 outline-lime-400",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2 outline outline-1 outline-lime-400",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
