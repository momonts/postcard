"use client";
import Footer from "@/components/footer";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import RedirectWalletConnect from "./components/RedirectWalletConnect";

export default function Home() {
  RedirectWalletConnect("/dashboard");

  const words = [
    {
      text: "Join",
    },
    {
      text: "now",
    },
    {
      text: "to",
    },
    {
      text: "get",
    },
    {
      text: "started.",
      className: "font-black text-lime-500 dark:text-lime-500",
    },
  ];

  return (
    <main>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Connect to people <br /> with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-lime-500">
                Postcard
              </span>
            </h1>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="bg-orange-50 w-1/2 h-96 pt-14 shadow-2xl overflow-hidden">
            <center>
              <img
                src="logo-postcard.png"
                className="size-16 mb-5 overflow-hidden"
              />
            </center>
            <TypewriterEffect words={words} />
            <center>
              <WalletMultiButton
                className="overflow-hidden"
                style={{
                  color: "#84cc16",
                  backgroundColor: "transparent",
                  margin: "35px",
                  border: "5px dashed",
                }}
              />
            </center>
          </div>

          <div className="overflow-hidden max-h-96 -mt-56">
            <img src="hero-typewriter.png" className="overflow-hidden" />
          </div>
        </div>
      </ContainerScroll>
      <div className="divider divider-neutral mt-0"></div>
      <Footer />
    </main>
  );
}
