import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, ColorModeScript, Text, Button } from "@chakra-ui/react";
import { Deneme } from "../Components/contract";
import { ethers } from "ethers";
declare var window: any;
export default function Home() {
  Deneme();

  return (
    <>
      <Text>hello world</Text>
      {/* <Button bg={"red"} onClick={() => Deneme()}>
        bas lan baaas
      </Button> */}
    </>
  );
}
