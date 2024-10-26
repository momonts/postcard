"use client";
import React from "react";
import {
  IconMail,
  IconRubberStamp,
  IconShare3,
  IconWriting,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
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
import SidebarComponent from "../components/SidebarComponent";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  title: z.string().max(60, {
    message: "Bio must not be longer than 60 characters.",
  }),
  content: z.string().max(4000, {
    message: "Bio must not be longer than 4000 characters.",
  }),
});

export default function DashboardPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <SidebarComponent>
      <div className="flex flex-1">
        <div className="px-2 bg-white dark:bg-neutral-900">
          <div className="grid grid-cols-4 gap-8 mt-5">
            <div className="col-span-3 ">
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

              <div className="my-5">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-lime-500 border-dashed border-2 text-lime-500 shadow-md hover:bg-lime-500 hover:text-white"
                    >
                      Create Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-full">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className=" space-y-6"
                      >
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Post</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Title"
                                  className="resize-none h-10 w-8/12 border-2 border-lime-500"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                60 Max characters
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="content"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea
                                  placeholder="Content"
                                  className="resize-none border-2 border-lime-500 h-96"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                4000 Max characters
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit">Post It!</Button>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarComponent>
  );
}
