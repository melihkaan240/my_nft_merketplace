declare global {
  interface Window {
    ethereum: any;
  }
}
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { abi } from "../Components/Abi";
import { useProvider } from "./useProvider";

const useContract = () => {
  const [contract, setContract] = useState<any>();

  const { provider, signer } = useProvider();
  const address = "0xbCD694453d115D2947D7277c3559b8CD601c77a7";

  useEffect(() => {
    if (typeof window != "undefined") {
      // const provider = new ethers.providers.Web3Provider(window.ethereum);

      const _contract = new ethers.Contract(address, abi, signer);
      setContract(_contract);
      console.log({ provider });
      console.log({ signer });
      console.log({ contract });
    }
  }, [provider]);

  return contract;
};
export default useContract;
