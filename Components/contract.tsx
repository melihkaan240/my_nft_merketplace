import React, { useEffect } from "react";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { BigNumber, ethers } from "ethers";
import { isGeneratorFunction } from "util/types";
import { useProvider } from "../Hooks/useProvider";
import useContract from "../Hooks/useContract";
declare var window: any;
export const Deneme = () => {
  const provider = useProvider();
  const contract = useContract();
  const getNumber = async () => {
    const number = await contract?.number();
    console.log("getirilen number", Number(number));
  };
  useEffect(() => {
    if (provider) {
      getNumber();
    }
  }, [provider]);
};
