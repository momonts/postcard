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
        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-50 w-1/2 h-96 pt-14 shadow-2xl">
            <center>
              <img src="logo-postcard.png" className="size-16 mb-5" />
            </center>
            <TypewriterEffect words={words} />
            <center>
              <WalletMultiButton
                style={{
                  color: "#84cc16",
                  backgroundColor: "transparent",
                  margin: "35px",
                  border: "5px dashed",
                }}
              />
              {/* <a href="/login">
                <button className="flex items-center space-x-2 font-mono px-6 py-2 my-10 text-2xl bg-transparent border-2 border-dashed border-lime-500 text-lime-500 font-bold transform hover:-translate-y-2 transition duration-400">
                  <span>Join Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                  </svg>
                </button>
              </a> */}
            </center>
          </div>

          <div className="overflow-hidden max-h-96 -mt-56">
            <img src="hero-typewriter.png" className="" />
          </div>
        </div>
      </ContainerScroll>
      <div className="divider divider-neutral mt-0"></div>
      <Footer />
    </main>
  );
}
