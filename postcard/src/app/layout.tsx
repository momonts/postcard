import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import AppWalletProvider from "./components/AppWalletProvider";
import "./globals.css";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DynamicContextProvider
          settings={{
            // Find your environment id at https://app.dynamic.xyz/dashboard/developer
            environmentId: "5ec95e71-a6f3-44cb-9800-cbd5cf84b8b7",
            walletConnectors: [
              EthereumWalletConnectors,
              SolanaWalletConnectors,
            ],
          }}
        >
          {children}
        </DynamicContextProvider>
      </body>
    </html>
  );
}
