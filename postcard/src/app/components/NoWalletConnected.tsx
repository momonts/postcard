import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";

const NoWalletConnected = (redirectUrl: string) => {
  const { connected } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!connected) {
      router.push(redirectUrl);
    }
  }, [connected, router, redirectUrl]);
};

export default NoWalletConnected;
