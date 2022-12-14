declare global {
  interface Window {
    ethereum: any;
  }
}
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
export const useProvider = () => {
  const [signer, setSigner] = useState<any>();
  const [provider, setProvider] = useState<any>();

  useEffect(() => {
    if (typeof window != "undefined") {
      const _provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(_provider);
      const _signer = _provider.getSigner();
      setSigner(_signer);
    }
  }, []);

  return { provider, signer };
};
